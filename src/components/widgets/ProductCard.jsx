import { Star, ShoppingCart } from "lucide-react";
import Button from "./Button";

export default function ProductCard({ product }) {
    const { 
        name, 
        image, 
        offerPrice, 
        normalPrice, 
        discount, 
        rating = 5, 
        reviews = 0, 
        stock = 10 
    } = product;

    return (
        <div className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 h-full">
            {/* Image Section */}
            <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
                {/* Discount Badge */}
                {discount && (
                    <div className="absolute top-3 left-3 z-10 bg-brand-accent text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                        -{discount}% OFF
                    </div>
                )}
                
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/400x400/1a1a1a/ffffff?text=Imagen+no+disponible';
                    }}
                />
                
                {/* Quick Action Overlay (Optional Desktop) */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:flex justify-center bg-linear-to-t from-black/50 to-transparent">
                    <Button variant="primary" size="sm" className="w-full shadow-lg">
                        <ShoppingCart className="w-4 h-4" />
                        Añadir
                    </Button>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
                            />
                        ))}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">({reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-bold text-brand-text mb-3 line-clamp-2 leading-relaxed flex-1">
                    {name}
                </h3>

                {/* Price */}
                <div className="flex flex-col mb-4">
                    <div className="flex items-end gap-2">
                        <span className="text-xl md:text-2xl font-black text-brand-accent leading-none">
                            {offerPrice}
                        </span>
                        {normalPrice && (
                            <span className="text-xs md:text-sm text-slate-400 line-through mb-0.5 font-medium">
                                {normalPrice}
                            </span>
                        )}
                    </div>
                </div>

                {/* Stock indicator */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className={`text-xs font-semibold ${stock > 5 ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {stock > 5 ? 'En stock' : `¡Solo ${stock} disponibles!`}
                    </span>
                    
                    {/* Mobile button (since hover overlay isn't friendly on touch) */}
                    <button className="md:hidden bg-slate-100 hover:bg-brand-accent hover:text-white text-slate-600 p-2 rounded-full transition-colors active:scale-95">
                        <ShoppingCart className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
