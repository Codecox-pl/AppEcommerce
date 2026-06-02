import { useState } from "react";
import { Minus, Plus, Trash2, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import RelatedProductsWidget from "../components/widgets/RelatedProductsWidget";
import PRODUCT_DATA from "../data/productDetail.json";

const initialCart = [
  {
    id: 1,
    name: "Laptop Gamer Lenovo LOQ Essential AMD ...",
    component: "Laptops",
    brand: "Lenovo",
    price: 3199.90,
    originalPrice: 4873.90,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Monitor BenQ ZOWIE XL2411K 24\" FHD",
    component: "Monitores",
    brand: "BenQ",
    price: 949.00,
    originalPrice: 1199.00,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400&auto=format&fit=crop"
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return { ...item, quantity: newQ > 0 ? newQ : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.16; // Example 16% VAT
  const total = subtotal + tax;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-44 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* Left Column: Cart Items */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="mb-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-1">Tu carro <span className="text-xl md:text-2xl font-normal tracking-normal text-gray-600">({cartItems.length} productos)</span></h1>
          </div>


          <div className="flex flex-col gap-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <p className="text-brand-text-muted mb-4">Tu carrito esta vacio.</p>
                <Link to="/" className="text-brand-accent font-bold hover:underline">Continuar comprando</Link>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex flex-row gap-3 sm:gap-6 pb-6 border-b border-gray-200">
                  {/* Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-white rounded-lg p-2 border border-gray-100 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs mb-1">
                      <span className="font-bold text-black">{item.brand}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500 text-[10px]">ID <span className="font-bold text-black">{item.id}</span></span>
                    </div>
                    <h3 className="text-sm sm:text-base leading-tight mb-2 line-clamp-2 text-gray-800">{item.name}</h3>

                    <div className="flex justify-between items-end mt-auto">
                      <div className="flex flex-col gap-2">
                        {/* Quantity Control */}
                        <div className="flex items-center bg-[#f0f2f5] rounded-md overflow-hidden w-fit">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 transition-colors text-black"><Minus size={12} /></button>
                          <div className="w-7 text-center font-bold text-xs h-7 flex items-center justify-center bg-[#f0f2f5]">{item.quantity}</div>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 transition-colors text-black"><Plus size={12} /></button>
                        </div>
                        {/* Remove */}
                        <button onClick={() => removeItem(item.id)} className="flex items-center gap-1 text-[11px] text-red-500 hover:text-red-700 font-bold transition-colors">
                          <Trash2 size={12} /> <span>Eliminar</span>
                        </button>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base sm:text-lg font-black leading-none text-[#16a34a]">S/ {item.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Order Summary (Desktop Only) */}
        <div className="hidden lg:block w-full lg:w-1/3 mt-4 lg:mt-0">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 lg:sticky lg:top-24">
            <h2 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-6 inline-block border-b-2 border-brand-accent pb-1">Order Summary</h2>

            <div className="flex flex-col gap-4 mb-6 mt-2">
              <div className="flex justify-between text-xs md:text-sm font-medium">
                <span className="text-brand-text-muted uppercase tracking-wider">Subtotal</span>
                <span className="font-bold text-gray-900">S/ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm font-medium">
                <span className="text-brand-text-muted uppercase tracking-wider">Logistics / Shipping</span>
                <span className="font-bold text-gray-900">S/ 0.00</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm font-medium">
                <span className="text-brand-text-muted uppercase tracking-wider">Calculated Tax (VAT)</span>
                <span className="font-bold text-gray-900">S/ {tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-gray-100 pt-6 mb-8 gap-2">
              <span className="text-brand-accent uppercase text-[10px] md:text-xs font-bold tracking-widest sm:mb-1">Total Investment</span>
              <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none">S/ {total.toFixed(2)}</span>
            </div>

            <button className="hidden lg:flex w-full bg-gradient-to-r from-brand-accent to-[#16a34a] hover:from-[#16a34a] hover:to-brand-accent-hover text-white font-black text-sm md:text-base py-4 rounded-xl shadow-lg shadow-brand-accent/30 transition-all items-center justify-center gap-2 mb-6 uppercase tracking-wider transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed" disabled={cartItems.length === 0}>
              Continuar <ChevronRight size={18} />
            </button>

            <p className="text-center text-[10px] text-brand-text-muted uppercase tracking-wider mb-6 px-4 leading-relaxed">
              Technical guarantee and verified logistics included.
            </p>

            <div className="bg-gray-50 border-l-2 border-brand-accent p-4 rounded-r-lg">
              <div className="flex items-center gap-2 mb-1 text-brand-accent">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Secure Transaction Protocol</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-tight">
                AES-256 encrypted checkout. Real-time stock reservation active for 15:00 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Related Products */}
        <div className="block lg:hidden w-full mt-4">
          <RelatedProductsWidget products={PRODUCT_DATA.relatedProducts} title="TAMBIÉN TE PODRÍA INTERESAR" />
        </div>

      </div>

      {/* Mobile Floating Bottom Bar */}
      <div className="block lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold text-gray-800 text-lg">Total a pagar:</span>
          <span className="text-2xl font-black">S/ {total.toFixed(2)}</span>
        </div>
        <p className="text-[11px] text-gray-500 leading-tight mb-3">
          El valor total se calculará de acuerdo al método de entrega.
        </p>
        <button className="w-full bg-gradient-to-r from-brand-accent to-[#16a34a] text-white font-black py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50" disabled={cartItems.length === 0}>
          Continuar <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
