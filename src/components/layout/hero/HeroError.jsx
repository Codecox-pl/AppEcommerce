// src/components/layout/hero/HeroError.jsx
import Button from "../../widgets/Button";

export default function HeroError({ message, onRetry }) {
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
