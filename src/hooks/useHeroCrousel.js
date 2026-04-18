// src/hooks/useHeroCarousel.js

import { useState, useEffect, useCallback } from "react";
import { heroService } from "../services/heroService";

const SLIDE_DURATION = 5000; // 5 segundos

export function useHeroCarousel() {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);

    // Cargar slides desde la "API"
    useEffect(() => {
        const loadSlides = async () => {
            setIsLoading(true);
            const result = await heroService.getSlides();

            if (result.success) {
                setSlides(result.data);
                setError(null);
            } else {
                setError(result.error);
            }

            setIsLoading(false);
        };

        loadSlides();
    }, []);

    const nextSlide = useCallback(() => {
        if (isAnimating || slides.length === 0) return;
        setIsAnimating(true);
        setIsTransitioning(true);
        setProgress(0);
        setCurrentSlide((prev) => prev + 1);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [isAnimating, slides.length]);

    const prevSlide = useCallback(() => {
        if (isAnimating || slides.length === 0) return;
        setIsAnimating(true);
        setIsTransitioning(true);
        setProgress(0);
        setCurrentSlide((prev) => prev - 1);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [isAnimating, slides.length]);

    const goToSlide = useCallback((index) => {
        if (isAnimating || slides.length === 0) return;
        setIsAnimating(true);
        setIsTransitioning(true);
        setProgress(0);
        // index is 0-based for the real slides
        setCurrentSlide(index + 1);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [isAnimating, slides.length]);

    // Seamless loop effect
    useEffect(() => {
        if (slides.length === 0) return;

        if (currentSlide === slides.length + 1) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(1);
            }, 500);
            return () => clearTimeout(timeout);
        }

        if (currentSlide === 0) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(slides.length);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentSlide, slides.length]);

    // Auto-play con barra de progreso
    useEffect(() => {
        if (isPaused || isLoading || error || slides.length === 0) return;

        let startTime = Date.now();
        let animationFrame;

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = (elapsed / SLIDE_DURATION) * 100;

            if (newProgress >= 100) {
                nextSlide();
                startTime = Date.now();
            } else {
                setProgress(newProgress);
                animationFrame = requestAnimationFrame(updateProgress);
            }
        };

        animationFrame = requestAnimationFrame(updateProgress);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [currentSlide, isPaused, isLoading, error, slides.length, nextSlide]);

    // Navegación con teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                prevSlide();
            } else if (e.key === "ArrowRight") {
                nextSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    let realIndex = 0;
    if (slides.length > 0) {
        if (currentSlide === 0) realIndex = slides.length - 1;
        else if (currentSlide === slides.length + 1) realIndex = 0;
        else realIndex = currentSlide - 1;
    }

    const currentSlideData = slides[realIndex] || null;

    return {
        slides,
        currentSlide: currentSlideData,
        currentIndex: currentSlide,       // For translate effect (includes clone at 0)
        realIndex: realIndex,             // For indicators mapping correctly
        isTransitioning,                  // To dynamically set duration class
        isLoading,
        error,
        isAnimating,
        isPaused,
        progress,
        nextSlide,
        prevSlide,
        goToSlide,
        setIsPaused
    };
}