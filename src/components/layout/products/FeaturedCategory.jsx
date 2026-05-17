import { ArrowRight } from "lucide-react";
import ProductCard from "../../widgets/ProductCard";
import PRODUCTOS_DATA from "../../../data/productos.json";

// Filtrar solo los monitores para esta sección
const MONITORS_DATA = PRODUCTOS_DATA.filter(p => p.category === "Monitores");

export default function FeaturedCategory() {
    return (
        <section className="w-full py-12 md:py-20 bg-brand-bg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header de Sección */}
                <div className="flex items-end justify-between mb-8 md:mb-10">
                    <div className="flex flex-col gap-3 md:gap-2">
                        <span className="text-brand-accent font-bold uppercase tracking-wider text-xs md:text-sm">
                            Destacados
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-brand-text">
                            Monitores
                        </h2>
                    </div>

                    <button className="flex items-center gap-1 md:gap-2 text-brand-accent hover:text-brand-accent-hover font-semibold transition-colors group text-sm md:text-base">
                        Ver todos
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Contenedor de Productos: Slider en Móvil, Grid en Desktop */}
                {/* Usamos un layout híbrido: flex con overflow horizontal en móvil, grid en pantallas grandes */}
                <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 pb-6 md:pb-0 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    {MONITORS_DATA.map((product) => (
                        <div key={product.id} className="snap-start shrink-0 w-[80vw] sm:w-75 md:w-auto">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>

            {/* Estilo local para ocultar scrollbar en navegadores */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
