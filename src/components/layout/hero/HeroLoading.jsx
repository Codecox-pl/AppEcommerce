// src/components/layout/hero/HeroLoading.jsx

export default function HeroLoading() {
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
