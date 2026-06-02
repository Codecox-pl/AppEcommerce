import { useState } from "react";
import { CheckCircle2, Zap, Minus, Plus, ZoomIn, X } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTabs from "../components/widgets/ProductTabs";
import RelatedProductsWidget from "../components/widgets/RelatedProductsWidget";
import PRODUCT_DATA from "../data/productDetail.json";
import { useImageGallery } from "../hooks/useImageGallery";

// Custom hook para la cantidad
function useQuantity(initialValue = 1, maxStock) {
  const [quantity, setQuantity] = useState(initialValue);

  const decrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const increase = () => {
    if (quantity < maxStock) setQuantity(prev => prev + 1);
  };

  return { quantity, decrease, increase };
}

export default function ProductDetail() {
  const { product, relatedProducts } = PRODUCT_DATA;
  const { quantity, decrease, increase } = useQuantity(1, product.stock);
  
  const { 
    activeImageIndex, 
    setActiveImageIndex, 
    isZoomModalOpen, 
    setIsZoomModalOpen, 
    zoomStyle, 
    handlers 
  } = useImageGallery(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-brand-text-muted mb-8 font-medium">
        <Link to="/" className="hover:text-brand-accent transition-colors">HOME</Link>
        <span>&gt;</span>
        <span className="hover:text-brand-accent transition-colors cursor-pointer">COMPONENTES</span>
        <span>&gt;</span>
        <span className="font-bold text-brand-text-main">{product.name}</span>
      </div>

      {/* Mobile Title */}
      <div className="block lg:hidden mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter mb-2 uppercase leading-[1.1]">
          NVIDIA GEFORCE<br />RTX 4080 SUPER
        </h1>
      </div>

      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">

        {/* Left: Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div 
            className="bg-white rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-8 flex items-center justify-center border border-gray-200 aspect-[4/3] sm:aspect-square shadow-sm relative group cursor-default lg:cursor-crosshair overflow-hidden"
            onClick={() => window.innerWidth >= 1024 && setIsZoomModalOpen(true)}
            {...handlers}
          >
            {/* Imagen base */}
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.name} 
              className="object-contain w-full h-full" 
            />
            
            {/* Efecto Lupa Inline - Superpuesto con transición */}
            <div 
              className={`hidden lg:block absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 ease-in-out ${zoomStyle.show ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url(${product.images[activeImageIndex]})`,
                backgroundPosition: `${zoomStyle.x} ${zoomStyle.y}`,
                backgroundSize: '250%',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white' // Fondo blanco para ocultar la imagen base cuando la opacidad es 1
              }}
            />

            {/* Icono Lupa */}
            <div className={`hidden lg:block absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-brand-accent shadow-sm border border-brand-accent/20 transition-opacity duration-300 ${zoomStyle.show ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
               <ZoomIn size={20} />
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl border-2 ${idx === activeImageIndex ? 'border-brand-accent' : 'border-gray-200 hover:border-gray-300'} bg-white flex items-center justify-center p-2 transition-colors`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="object-cover w-full h-full rounded-md" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Title */}
          <h1 className="hidden lg:block text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter mb-2 uppercase leading-[1.1]">
            NVIDIA GEFORCE<br />RTX 4080 SUPER
          </h1>

          {/* Price */}
          <div className="flex flex-col items-start sm:flex-row sm:items-end gap-1 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-4xl sm:text-5xl font-black text-brand-accent tracking-tighter leading-none">${product.price.toFixed(2)}</span>
            <span className="text-sm sm:text-xs font-semibold text-brand-accent tracking-tighter">Precio Fan Destacado</span>
          </div>

          {/* Price especial*/}
          <div className="flex flex-col items-start sm:flex-row sm:items-end gap-0 sm:gap-3 mb-6">
            <span className="text-lg text-brand-text-muted line-through leading-none sm:mb-1.5">${product.originalPrice.toFixed(2)}</span>
            <span className="text-sm sm:text-lg text-brand-text-muted sm:mb-1.5">Precio regular</span>
          </div>

          {/* Stock, SKU & Quantity */}
          <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-500">SKU:</span>
                <span className="font-bold">{product.sku}</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-500">Disponibilidad:</span>
                <span className={`font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <span className="font-bold text-sm text-gray-600">Cantidad:</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                <button 
                  onClick={decrease}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <div className="w-12 h-10 flex items-center justify-center font-bold border-x border-gray-300 text-sm">
                  {quantity}
                </div>
                <button 
                  onClick={increase}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors disabled:opacity-50"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3.5 mb-10">
            {[
              "NVIDIA Ada Lovelace Architecture",
              "Dedicated Ray Tracing Cores (3rd Gen)",
              "Triple-Fan Kinetic Thermal Design"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-accent shrink-0" />
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Buy Button */}
          <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-black font-black text-lg py-4 rounded-xl shadow-lg shadow-brand-accent/20 transition-all flex items-center justify-center gap-2 mb-8 transform hover:-translate-y-0.5 active:translate-y-0">
            COMPRAR AHORA <Zap size={20} className="fill-black" />
          </button>
        </div>
      </div>

      {/* Product Tabs (Full width below the main product info) */}
      <ProductTabs tabsData={product.tabs} />

      {/* Related Products */}
      <RelatedProductsWidget products={relatedProducts} />

      {/* Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm" onClick={() => setIsZoomModalOpen(false)}>
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
            onClick={() => setIsZoomModalOpen(false)}
          >
            <X size={24} />
          </button>
          <img 
            src={product.images[activeImageIndex]} 
            alt={product.name} 
            className="w-full h-full object-contain max-w-5xl" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
