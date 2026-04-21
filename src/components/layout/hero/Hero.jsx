// src/components/layout/hero/Hero.jsx
import { useHeroCarousel } from "../../../hooks/useHeroCrousel";
import HeroLoading from "./HeroLoading";
import HeroError from "./HeroError";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
    const {
        slides,
        currentSlide,
        currentIndex,
        realIndex,
        isTransitioning,
        isLoading,
        error,
        nextSlide,
        prevSlide,
        goToSlide,
    } = useHeroCarousel();

    if (isLoading) {
        return <HeroLoading />;
    }

    if (error || !currentSlide) {
        return <HeroError message={error || "No hay slides disponibles"} onRetry={() => window.location.reload()} />;
    }

    return (
        <HeroCarousel
            slides={slides}
            currentIndex={currentIndex}
            realIndex={realIndex}
            isTransitioning={isTransitioning}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            goToSlide={goToSlide}
        />
    );
}
