import { useState, useEffect } from "react";
import { ShoppingCart, User, MapPin, Menu, Search, ChevronDown } from "lucide-react";
import NavbarAction from "./NavbarAction";
import CategoriesMenu from "../../widgets/CategoriesMenu";
import LocationModal from "../../widgets/LocationModal";
import AuthModal from "../auth/AuthModal";
import RegisterModal from "../auth/RegisterModal";
import SearchModal from "../../widgets/SearchModal";

export default function Navbar({ onSearchModalChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (onSearchModalChange) {
            onSearchModalChange(isSearchModalOpen);
        }
    }, [isSearchModalOpen, onSearchModalChange]);

    const handleSelectLocation = (loc) => {
        setLocation(loc);
    };

    return (
        <>
            <CategoriesMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <LocationModal
                isOpen={isLocationModalOpen}
                onClose={() => setIsLocationModalOpen(false)}
                onSelect={handleSelectLocation}
            />
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                onSwitchToRegister={() => {
                    setIsAuthModalOpen(false);
                    setIsRegisterModalOpen(true);
                }}
            />
            <RegisterModal
                isOpen={isRegisterModalOpen}
                onClose={() => setIsRegisterModalOpen(false)}
                onSwitchToLogin={() => {
                    setIsRegisterModalOpen(false);
                    setIsAuthModalOpen(true);
                }}
            />
            <SearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
            />
            <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-bg/95 sm:bg-transparent shadow-sm sm:shadow-none border-b border-gray-200 sm:border-none">
                <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 pt-8 pb-3 sm:py-3 gap-y-3 sm:gap-y-0">

                    {/* Izquierda ---- Menu y Logo ----*/}
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0 order-1">
                        {/* Menu hamburguesa (primero en móvil) */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-brand-text-main hover:text-brand-accent transition-colors cursor-pointer shrink-0"
                        >
                            <Menu size={24} />
                        </button>

                        {/*Logo*/}
                        <span className="text-xl sm:text-xl font-black italic tracking-tighter text-brand-accent cursor-pointer">
                            REMATAZO
                        </span>

                        {/*Botón de Ubicación - Solo en pantallas medianas y grandes*/}
                        <div
                            onClick={() => setIsLocationModalOpen(true)}
                            className="hidden md:flex items-center gap-2 bg-brand-bg px-4 py-2 rounded-full border border-gray-700 hover:border-gray-600 cursor-pointer transition-colors"
                        >
                            <MapPin size={18} className="text-brand-text-main" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-brand-text-main font-medium">
                                    {location ? "Enviar a" : "¿Dónde te gustaría"}
                                </span>
                                <span className="text-xs text-brand-text-main font-semibold leading-tight truncate max-w-37.5">
                                    {location ? `${location.distrito.name}, ${location.provincia.name}` : "recibir tu pedido?"}
                                </span>
                            </div>
                            <ChevronDown size={16} className="text-brand-text-main" />
                        </div>
                    </div>

                    {/* Derecha ---- Acciones (Iconos) ----*/}
                    <div className="flex items-center gap-3 sm:gap-6 shrink-0 order-2 sm:order-3">
                        <NavbarAction
                            icon={User}
                            label="Iniciar sesión"
                            hasCircle={true}
                            onClick={() => setIsAuthModalOpen(true)}
                        />

                        <NavbarAction
                            icon={ShoppingCart}
                            label="Carrito"
                            badge={10}
                        />
                    </div>

                    {/* Centro ---- Barra de busqueda (Segunda fila en móvil) ----*/}
                    <div className="w-full sm:flex-1 sm:w-auto order-3 sm:order-2 sm:mx-8 mt-1 sm:mt-0">
                        <div 
                            className="relative w-full cursor-pointer group"
                            onClick={() => setIsSearchModalOpen(true)}
                        >
                            <div className="w-full bg-white sm:bg-brand-bg border border-gray-300 sm:border-brand-text-muted rounded-full py-2 sm:py-2.5 pl-4 pr-10 sm:pl-5 sm:pr-12 text-sm text-gray-500 group-hover:border-brand-accent transition-colors flex items-center h-[38px] sm:h-[42px]">
                                ¿Qué estás buscando hoy?
                            </div>
                            <button className="absolute right-1 top-1 bottom-1 bg-brand-accent text-black rounded-full px-2 cursor-pointer shrink-0 pointer-events-none">
                                <Search size={16} className="sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}