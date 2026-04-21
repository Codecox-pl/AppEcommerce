import { X, ChevronRight, Cpu, Monitor, HardDrive, Headphones, Gamepad2 } from "lucide-react";
import categoriasData from "../../data/categorias.json";

// Mapeo de iconos desde strings a componentes
const iconMap = {
    Cpu,
    Monitor,
    HardDrive,
    Headphones,
    Gamepad2
};

export default function CategoriesMenu({ isOpen, onClose }) {
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

            {/* Panel lateral: Se mantiene el diseño original. 
                Se usa w-[85%] en móvil para que siempre se vea una franja de la web de fondo, 
                reforzando el efecto de "una imagen sobre otra" en cualquier resolución. */}
            <div className="fixed left-0 top-0 h-full w-[85%] sm:w-96 bg-brand-surface border-r border-gray-800 z-50 shadow-2xl shadow-black transform transition-transform duration-300 ease-out overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-brand-surface border-b border-gray-800 p-6 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-black text-brand-accent italic">
                        CATEGORÍAS
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-brand-bg rounded-lg transition-colors text-gray-400 hover:text-brand-accent cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Lista de Categorías */}
                <div className="p-6 space-y-2">
                    {categoriasData.categorys.map((category) => {
                        const Icon = iconMap[category.icon];
                        return (
                            <a
                                key={category.id}
                                href={category.href}
                                className="group flex items-start gap-4 p-4 rounded-xl bg-brand-bg hover:bg-brand-bg/80 border border-transparent hover:border-gray-700 transition-all cursor-pointer"
                            >
                                <div className="p-3 rounded-lg bg-brand-surface group-hover:bg-brand-accent/10 transition-colors">
                                    {Icon && <Icon size={24} className="text-brand-accent" />}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-brand-text-main group-hover:text-brand-accent transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-brand-text-muted mt-1">
                                        {category.description}
                                    </p>
                                </div>
                                <ChevronRight
                                    size={20}
                                    className="text-gray-600 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"
                                />
                            </a>
                        );
                    })}
                </div>

                {/* Footer con info adicional */}
                <div className="p-6 border-t border-gray-800">
                    <div className="bg-gradient-to-r from-brand-accent/10 to-transparent p-4 rounded-xl border border-brand-accent/20">
                        <p className="text-sm font-bold text-brand-accent mb-1">
                            🎮 ¿Armas tu PC?
                        </p>
                        <p className="text-xs text-brand-text-muted">
                            Usa nuestro configurador y obtén descuentos especiales
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}