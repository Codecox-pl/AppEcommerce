import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function RelatedProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group flex flex-col cursor-pointer">
      <div className="aspect-square bg-gray-50 p-6 flex items-center justify-center relative">
        <img src={product.image} alt={product.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] text-brand-text-muted font-bold tracking-wider mb-1">{product.category}</span>
        <h3 className="font-bold text-sm leading-tight mb-3 flex-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-black text-lg">${product.price.toFixed(2)}</span>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-colors text-brand-text-muted">
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function RelatedProductsWidget({ products, title = "OTROS USUARIOS COMPRARON" }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-20 sm:mt-24 mb-12">
      <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-3">
        <h2 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase relative">
          {title}
          <div className="absolute -bottom-[14px] left-0 w-16 h-1 bg-brand-accent"></div>
        </h2>
        <a href="#" className="text-brand-accent text-xs sm:text-sm font-bold flex items-center gap-1 hover:underline group">
          VER TODOS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {products.map(rp => (
          <RelatedProductCard key={rp.id} product={rp} />
        ))}
      </div>
    </div>
  );
}
