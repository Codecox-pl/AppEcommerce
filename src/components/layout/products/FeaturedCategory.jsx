import { ArrowRight } from "lucide-react";
import ProductCard from "../../widgets/ProductCard";

// Mock Data
const MONITORS_DATA = [
    {
        id: 1,
        name: "Monitor Gamer Curvo Odyssey G9 49\" DQHD 240Hz 1ms",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
        offerPrice: "S/ 4,599",
        normalPrice: "S/ 5,999",
        discount: 23,
        rating: 4.8,
        reviews: 124,
        stock: 3
    },
    {
        id: 2,
        name: "Monitor LG UltraGear 27\" QHD IPS 165Hz 1ms G-Sync",
        image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=800&auto=format&fit=crop",
        offerPrice: "S/ 1,299",
        normalPrice: "S/ 1,899",
        discount: 31,
        rating: 4.9,
        reviews: 89,
        stock: 12
    },
    {
        id: 3,
        name: "Monitor BenQ ZOWIE XL2411K 24\" FHD 144Hz 1ms para e-Sports",
        image: "https://images.unsplash.com/photo-1586952518485-11b180e92764?q=80&w=800&auto=format&fit=crop",
        offerPrice: "S/ 949",
        normalPrice: "S/ 1,199",
        discount: 20,
        rating: 4.7,
        reviews: 342,
        stock: 5
    },
    {
        id: 4,
        name: "Monitor ASUS ProArt Display 27\" 4K HDR HDR10",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
        offerPrice: "S/ 2,199",
        normalPrice: "S/ 2,699",
        discount: 18,
        rating: 4.6,
        reviews: 56,
        stock: 8
    },
    {
        id: 5,
        name: "Monitor Gigabyte G27QC A 27\" VA Curvo QHD 165Hz",
        image: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=800&auto=format&fit=crop",
        offerPrice: "S/ 1,149",
        normalPrice: "S/ 1,499",
        discount: 23,
        rating: 4.5,
        reviews: 72,
        stock: 15
    }
];

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
