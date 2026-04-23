import { useState, useEffect } from "react";
import { X, ChevronRight, ArrowLeft } from "lucide-react";
import categoriasData from "../../data/categorias.json";

export default function CategoriesMenu({ isOpen, onClose }) {
    const [activeCategory, setActiveCategory] = useState(null);

    // Limpiar estado cuando se cierra el panel
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => setActiveCategory(null), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay oscurecido sin efecto blur. 
                Se usa bg-black/60 para oscurecer el fondo sin cansar la vista, 
                manteniendo el foco visual en el menú. */}
            <div
                className="fixed inset-0 bg-black/60 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Panel lateral */}
            <div className="fixed left-0 top-0 h-full w-[85%] sm:w-96 bg-white z-50 shadow-2xl shadow-black transform transition-transform duration-300 ease-out flex flex-col">
                {/* Header */}
                <div className="sticky top-0 bg-white p-6 flex items-center justify-between z-10 border-b border-gray-50">
                    <h2 className="text-xl font-bold text-brand-accent">
                        Categorias
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {!activeCategory ? (
                        <>
                            {/* Lista de Categorías */}
                            <div className="p-4 space-y-1">
                                {categoriasData.categorys.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category)}
                                        className="w-full text-left group flex items-center justify-between p-3 rounded-lg border-l-4 border-transparent hover:border-green-600 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                                    >
                                        <span className="text-[15px] font-medium text-gray-700 group-hover:text-gray-900 group-hover:font-semibold transition-all">
                                            {category.name}
                                        </span>
                                        <ChevronRight
                                            size={18}
                                            className="text-gray-400 group-hover:text-gray-900 transition-colors"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Footer con info adicional */}
                            <div className="p-6 mt-auto border-t border-gray-50">
                                <div className="bg-linear-to-r from-green-50 to-transparent p-4 rounded-xl border border-green-100">
                                    <p className="text-sm font-bold text-brand-accent mb-1">
                                        📱 ¿Necesitas ayuda?
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Contacta a nuestros asesores para que puedan ayudarte
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="p-4">
                            {/* Navegación de Subcategoría */}
                            <div className="flex items-center gap-3 mb-4 px-2">
                                <button
                                    onClick={() => setActiveCategory(null)}
                                    className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-brand-accent transition-colors cursor-pointer"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {activeCategory.name}
                                </h3>
                            </div>

                            {/* Lista de Subcategorías */}
                            <div className="space-y-1 border-t border-gray-100 pt-4">
                                {activeCategory.subcategories?.map((sub) => (
                                    <a
                                        key={sub.id}
                                        href={sub.href}
                                        className="group block p-3 rounded-lg border-l-4 border-transparent hover:border-green-600 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                                    >
                                        <span className="text-[14px] font-medium text-gray-600 group-hover:text-gray-900 group-hover:font-semibold transition-all">
                                            {sub.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}