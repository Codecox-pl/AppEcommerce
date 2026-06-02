import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function RelatedProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="w-full bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group flex flex-col cursor-pointer">
      <div className="aspect-square bg-gray-50 p-6 flex items-center justify-center relative">
        <img src={product.image} alt={product.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] text-brand-text-muted font-bold tracking-wider mb-1">{product.category}</span>
        <h3 className="font-bold text-sm leading-tight mb-3 flex-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-black text-lg">S/ {product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-full bg-brand-accent text-black flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
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
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h2 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase relative inline-block">
          {title}
          <div className="absolute -bottom-[14px] left-0 w-16 h-1 bg-brand-accent"></div>
        </h2>
      </div>
      
      <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {products.map(rp => (
          <div key={rp.id} className="w-[180px] sm:w-[240px] shrink-0 snap-start flex">
            <RelatedProductCard product={rp} />
          </div>
        ))}
      </div>
    </div>
  );
}
