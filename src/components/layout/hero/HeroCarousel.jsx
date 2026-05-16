// src/components/layout/hero/HeroCarousel.jsx

import Button from "../../widgets/Button"
import { ChevronLeft, ChevronRight } from "lucide-react";

// Componente Principal (UI Pura)
export default function HeroCarousel({
    slides,
    currentIndex,
    realIndex,
    isTransitioning,
    nextSlide,
    prevSlide,
    goToSlide,
}) {

    const extendedSlides = slides.length > 0 ? [slides[slides.length - 1], ...slides, slides[0]] : [];

    return (
        <section className="relative w-full bg-white border-y border-slate-200 overflow-hidden shadow-sm">
            <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-12 md:py-16 sm:px-6 lg:px-8">
                {/* Track del Carousel */}
                <div className="overflow-hidden w-full">
                    <div
                        className={`flex transition-transform ${isTransitioning ? 'duration-500 ease-in-out' : 'duration-0'}`}
                        style={{
                            width: `${extendedSlides.length * 100}%`,
                            transform: `translateX(-${(currentIndex * 100) / (extendedSlides.length || 1)}%)`
                        }}
                    >
                        {extendedSlides.map((slide, index) => (
                            <div
                                key={index}
                                className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
                                style={{ width: `${100 / (extendedSlides.length || 1)}%` }}
                            >
                                {/* --- COLUMNA IZQUIERDA: Contenido --- */}
                                <div className="relative z-10 max-w-full overflow-hidden flex flex-col justify-center">
                                    {/* Título */}
                                    <h1 className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-black leading-tight break-words hyphens-auto text-brand-text line-clamp-3">
                                        {slide.title}
                                    </h1>

                                    {/* Precios (en columna) */}
                                    <div className="mb-8 flex flex-col gap-1">
                                        <span className="text-3xl sm:text-4xl font-black text-brand-accent">
                                            {slide.offerPrice}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs sm:text-xl font-bold text-slate-500">P.Normal</span>
                                            <span className="text-lg sm:text-xl font-bold text-slate-500 line-through">{slide.normalPrice}</span>
                                        </div>
                                    </div>

                                    {/* Botones */}
                                    <div className="flex w-full">
                                        <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                            Comprar
                                        </Button>
                                    </div>
                                </div>

                                {/* --- COLUMNA DERECHA: Imagen --- */}
                                <div className="relative flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-lg">
                                        <img
                                            src={slide.image}
                                            alt={slide.imageAlt}
                                            className="w-full h-56 sm:h-72 md:h-96 lg:h-112.5 object-cover rounded-2xl shadow-2xl shadow-brand-accent/10"
                                            loading={index === 0 ? "eager" : "lazy"}
                                            onError={(e) => {
                                                e.target.src = 'https://placehold.co/800x450/1a1a1a/ffffff?text=Imagen+no+disponible';
                                            }}
                                        />
                                        <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-brand-bg/20 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

                {/* --- CONTROLES --- */}
                {/* Flechas */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-surface/80 border border-gray-700 items-center justify-center text-gray-300 hover:text-brand-accent hover:border-brand-accent hover:bg-brand-bg transition-all backdrop-blur-sm"
                    aria-label="Slide anterior"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-surface/80 border border-gray-700 items-center justify-center text-gray-300 hover:text-brand-accent hover:border-brand-accent hover:bg-brand-bg transition-all backdrop-blur-sm"
                    aria-label="Siguiente slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <div className="flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === realIndex ? 'w-8 bg-brand-accent' : 'w-2 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Ir al slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Indicador de Pausa eliminado */}
            </div>
        </section>
    );
}