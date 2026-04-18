// src/components/layout/HeroCarousel.jsx

import Button from "../../ui/Button";
import { useHeroCarousel } from "../../../hooks/useHeroCrousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Componente de Loading
function HeroLoading() {
    return (
        <section className="relative w-full bg-brand-bg py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Skeleton del contenido */}
                    <div className="space-y-6 animate-pulse">
                        <div className="h-8 w-48 bg-brand-surface rounded-full"></div>
                        <div className="h-20 w-96 bg-brand-surface rounded"></div>
                        <div className="h-4 w-80 bg-brand-surface rounded"></div>
                        <div className="flex gap-4">
                            <div className="h-12 w-40 bg-brand-surface rounded-lg"></div>
                            <div className="h-12 w-40 bg-brand-surface rounded-lg"></div>
                        </div>
                    </div>
                    {/* Skeleton de la imagen */}
                    <div className="hidden lg:block">
                        <div className="h-96 w-full bg-brand-surface rounded-2xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Componente de Error
function HeroError({ message, onRetry }) {
    return (
        <section className="relative w-full bg-brand-bg py-20">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <div className="text-red-500 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-text-main mb-2">
                    Error al cargar el contenido
                </h3>
                <p className="text-brand-text-muted mb-6">{message}</p>
                <Button variant="primary" onClick={onRetry}>
                    Reintentar
                </Button>
            </div>
        </section>
    );
}

// Componente Principal (UI Pura)
export default function HeroCarousel() {
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

    // Estados de carga y error
    if (isLoading) {
        return <HeroLoading />;
    }

    if (error || !currentSlide) {
        return <HeroError message={error || "No hay slides disponibles"} onRetry={() => window.location.reload()} />;
    }

    const extendedSlides = slides.length > 0 ? [slides[slides.length - 1], ...slides, slides[0]] : [];

    return (
        <section className="relative w-full bg-brand-bg overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Track del Carousel */}
                <div className="overflow-hidden w-full">
                    <div
                        className={`flex transition-transform ${isTransitioning ? 'duration-500 ease-in-out' : 'duration-0'}`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {extendedSlides.map((slide, index) => (
                            <div key={index} className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* --- COLUMNA IZQUIERDA: Contenido --- */}
                                <div className="relative z-10 max-w-full overflow-hidden">
                                    {/* Badge */}
                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-brand-surface px-4 py-1.5 max-w-full">
                                        <span className={`w-2 h-2 rounded-full shrink-0 ${slide.bgColor} animate-pulse`}></span>
                                        <span className={`text-xs font-bold uppercase tracking-wider truncate ${slide.badgeColor}`}>
                                            {slide.badge}
                                        </span>
                                    </div>

                                    {/* Título */}
                                    <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight wrap-break-word hyphens-auto">
                                        {slide.title}{' '}
                                        <span className={slide.badgeColor}>{slide.titleHighlight}</span>
                                    </h1>

                                    {/* Descripción */}
                                    <p className="mb-8 text-lg text-brand-text-muted max-w-lg wrap-break-word line-clamp-4">
                                        {slide.description}
                                    </p>

                                    {/* Botones */}
                                    <div className="flex flex-wrap gap-4 w-full">
                                        <div className="flex-1 sm:flex-none min-w-0">
                                            <Button variant="primary" size="lg">
                                                <span className="truncate block w-full">{slide.primaryButton}</span>
                                            </Button>
                                        </div>
                                        <div className="flex-1 sm:flex-none min-w-0">
                                            <Button variant="outline" size="lg">
                                                <span className="truncate block w-full">{slide.secondaryButton}</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* --- COLUMNA DERECHA: Imagen --- */}
                                <div className="relative flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-lg">
                                        <img
                                            src={slide.image}
                                            alt={slide.imageAlt}
                                            className="w-full h-75 sm:h-87.5 md:h-100 lg:h-112.5 object-cover rounded-2xl shadow-2xl shadow-brand-accent/10"
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
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
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