import { X, ChevronDown } from "lucide-react";
import { useLocationModal } from "../../hooks/useLocationModal";

export default function LocationModal({ isOpen, onClose, onSelect }) {
    const {
        selectedDepartamento,
        setSelectedDepartamento,
        selectedProvincia,
        setSelectedProvincia,
        selectedDistrito,
        setSelectedDistrito,
        provincias,
        distritos,
        isComplete,
        handleAccept,
        ubicacionesData
    } = useLocationModal(isOpen, onClose, onSelect);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop sin onClick para evitar que se cierre */}
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="relative bg-brand-bg w-full max-w-[550px] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="relative p-6 border-b border-gray-300 flex items-center justify-center">
                    <h2 className="text-xl font-bold text-brand-text-main">
                        Elige donde recibir tus compras
                    </h2>
                    <button
                        onClick={onClose}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-accent transition-colors cursor-pointer"
                    >
                        <X size={28} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="p-8 flex flex-col gap-6">
                    <p className="text-center text-brand-text-muted text-[15px] leading-relaxed px-4 mb-2">
                        Te mostraremos los productos disponibles en tu zona, junto con el tiempo y costo de entrega.
                    </p>

                    <div className="flex flex-col gap-6 px-2 md:px-8">
                        {/* Departamento */}
                        <div className="relative">
                            <label className="absolute -top-2.5 left-3 bg-brand-bg px-1 text-[13px] font-bold text-brand-accent z-10">
                                Departamento <span className="text-brand-accent">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedDepartamento}
                                    onChange={(e) => {
                                        setSelectedDepartamento(e.target.value);
                                        setSelectedProvincia("");
                                        setSelectedDistrito("");
                                    }}
                                    className="w-full appearance-none border-2 border-gray-300 text-brand-text-main rounded-lg p-3 outline-none focus:border-brand-accent transition-colors bg-transparent cursor-pointer text-[15px] font-medium"
                                >
                                    <option value="" disabled>Selecciona tu departamento</option>
                                    {ubicacionesData.map(dep => (
                                        <option key={dep.id} value={dep.id}>{dep.name}</option>
                                    ))}
                                </select>
                                <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none" />
                            </div>
                        </div>

                        {/* Provincia */}
                        {selectedDepartamento && (
                            <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="absolute -top-2.5 left-3 bg-brand-bg px-1 text-[13px] font-bold text-brand-accent z-10">
                                    Provincia <span className="text-brand-accent">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedProvincia}
                                        onChange={(e) => {
                                            setSelectedProvincia(e.target.value);
                                            setSelectedDistrito("");
                                        }}
                                        className="w-full appearance-none border-2 border-gray-300 text-brand-text-main rounded-lg p-3 outline-none focus:border-brand-accent transition-colors bg-transparent cursor-pointer text-[15px] font-medium"
                                    >
                                        <option value="" disabled>Selecciona tu provincia</option>
                                        {provincias.map(prov => (
                                            <option key={prov.id} value={prov.id}>{prov.name}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none" />
                                </div>
                            </div>
                        )}

                        {/* Distrito */}
                        {selectedProvincia && (
                            <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="absolute -top-2.5 left-3 bg-brand-bg px-1 text-[13px] font-bold text-brand-accent z-10">
                                    Distrito <span className="text-brand-accent">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedDistrito}
                                        onChange={(e) => setSelectedDistrito(e.target.value)}
                                        className="w-full appearance-none border-2 border-gray-300 text-brand-text-main rounded-lg p-3 outline-none focus:border-brand-accent transition-colors bg-transparent cursor-pointer text-[15px] font-medium"
                                    >
                                        <option value="" disabled>Selecciona tu distrito</option>
                                        {distritos.map(dist => (
                                            <option key={dist.id} value={dist.id}>{dist.name}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleAccept}
                            disabled={!isComplete}
                            className={`px-14 py-3 rounded-lg font-bold transition-colors shadow-sm ${
                                isComplete 
                                ? "bg-brand-accent text-white hover:bg-brand-accent-hover" 
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            ACEPTAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
