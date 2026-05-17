import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard"; // Reutilizaremos este componente
import MOCK_PRODUCTS from "../../data/productos.json";

export default function SearchModal({ isOpen, onClose }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setSearchTerm("");
            setResults([]);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setResults([]);
            return;
        }

        const filtered = MOCK_PRODUCTS.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 1); // Limit to 1 result
        setResults(filtered);
    }, [searchTerm]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-brand-bg w-full max-w-4xl rounded-xl shadow-2xl flex flex-col max-h-[80vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Search Header */}
                <div className="relative p-4 sm:p-6 border-b border-gray-200 flex items-center gap-4">
                    <div className="relative w-full flex items-center">
                        <Search className="absolute left-4 text-brand-text-muted" size={24} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="¿Qué estás buscando hoy?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-100 border-none rounded-full py-3 sm:py-4 pl-12 pr-12 text-base sm:text-lg text-brand-text-main placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                        />
                        {searchTerm && (
                            <button 
                                onClick={() => setSearchTerm("")}
                                className="absolute right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-brand-text-muted hover:text-brand-accent transition-colors cursor-pointer shrink-0 hidden sm:block"
                    >
                        <X size={28} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Results Area */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
                    {searchTerm.trim() === "" ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                            <Search size={48} className="mb-4 text-gray-300" strokeWidth={1} />
                            <p className="text-lg font-medium">Escribe algo para empezar a buscar</p>
                            <p className="text-sm mt-1">Busca por nombre de producto, categoría o marca</p>
                        </div>
                    ) : results.length > 0 ? (
                        <div className="flex justify-center w-full mx-auto max-w-2xl">
                            {results.map((product) => (
                                <div key={product.id} className="w-full flex items-center bg-white rounded-xl shadow-sm border border-slate-100 p-3 sm:p-4 hover:shadow-md transition-shadow">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-lg overflow-hidden shrink-0 relative">
                                        {product.discount && (
                                            <div className="absolute top-1 left-1 z-10 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                                                -{product.discount}%
                                            </div>
                                        )}
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="ml-4 flex flex-col justify-center flex-1">
                                        <h3 className="text-sm sm:text-base font-bold text-brand-text line-clamp-2 leading-tight mb-1">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-lg font-black text-brand-accent leading-none">
                                                {product.offerPrice}
                                            </span>
                                            {product.normalPrice && (
                                                <span className="text-xs text-slate-400 line-through">
                                                    {product.normalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="ml-2 pl-3 border-l border-slate-100 hidden sm:flex flex-col items-center justify-center shrink-0">
                                        <span className={`text-xs font-semibold mb-2 ${product.stock > 5 ? 'text-emerald-600' : 'text-rose-500'}`}>
                                            {product.stock > 5 ? 'Stock' : '¡Últimos!'}
                                        </span>
                                        <button className="bg-brand-accent hover:bg-brand-accent-hover text-black px-4 py-2 rounded-full text-sm font-bold transition-colors">
                                            Ver producto
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                <Search size={24} className="text-gray-400" />
                            </div>
                            <p className="text-lg font-medium text-gray-700">No encontramos resultados para "{searchTerm}"</p>
                            <p className="text-sm mt-1">Intenta con otras palabras o revisa la ortografía</p>
                        </div>
                    )}
                </div>

                {/* Footer Link */}
                {searchTerm.trim() !== "" && (
                    <div className="p-4 bg-white border-t border-gray-200 flex justify-center">
                        <button className="flex items-center gap-2 text-brand-accent hover:text-brand-accent-hover font-semibold transition-colors group">
                            <span>Ver todos los resultados para "{searchTerm}"</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
