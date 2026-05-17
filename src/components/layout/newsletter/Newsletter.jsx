import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden border-t border-slate-200">
            {/* Elementos Decorativos de Fondo (Blobs) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                    {/* Texto y Título */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
                            <Mail className="w-4 h-4" />
                            Comunidad Rematazo
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-text mb-4 leading-tight">
                            ¡No te pierdas de <span className="text-brand-accent">ninguna oferta!</span>
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">
                            Únete a nuestro boletín y recibe descuentos exclusivos, acceso anticipado a liquidaciones y las mejores recomendaciones de tecnología antes que nadie.
                        </p>
                    </div>

                    {/* Formulario */}
                    <div className="w-full lg:w-112.5 shrink-0">
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="tu@correo.com"
                                    required
                                    className="w-full bg-white border border-slate-300 text-brand-text placeholder-slate-400 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 whitespace-nowrap shadow-lg shadow-brand-accent/20"
                            >
                                Suscribirme
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                        <p className="text-xs text-slate-500 mt-4 text-center lg:text-left">
                            Al suscribirte, aceptas nuestras <a href="#" className="text-brand-accent hover:underline transition-colors">Políticas de Privacidad</a>. Prometemos no enviarte spam.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
