
import { ShoppingCart, User, MapPin, Menu, Search, ChevronDown } from "lucide-react";
import NavbarAction from "./NavbarAction";

export default function Navbar() {
    return (

        <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                {/* Izquierda ---- Logo y Menu ----*/}
                <div className="flex items-center gap-4">
                    {/*Logo*/}
                    <span className="text-xl font-black italic tracking-tighter text-brand-accent cursor-pointer">
                        REMATAZO
                    </span>
                    {/* Menu hamburguesa */}
                    <button className="text-brand-text-main hover:text-brand-accent transition-colors cursor-pointer">
                        <Menu size={24} />
                    </button>

                    {/*Botón de Ubicación - Solo en pantallas medianas y grandes*/}
                    <div className="hidden md:flex items-center gap-2 bg-brand-bg px-4 py-2 rounded-full border border-gray-700 hover:border-gray-600 cursor-pointer transition-colors">
                        <MapPin size={18} className="text-brand-text-main" />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-brand-text-main font-medium">¿Dónde te gustaría</span>
                            <span className="text-xs ext-brand-text-main font-semibold leading-tight">recibir tu pedido?</span>
                        </div>
                        <ChevronDown size={16} className="text-brand-text-main" />
                    </div>
                </div>

                {/* Centro ---- Barra de busqueda ----*/}
                <div className="flex-1 mx-3 sm:mx-8 max-w-xl sm:max-w-2xl">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="¿Qué estás buscando hoy?"
                            className="w-full bg-brand-bg border border-brand-text-muted rounded-full py-2.5 pl-5 pr-12 text-sm text-brand-text-main placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors"
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-brand-accent text-black rounded-full px-2 cursor-pointer">
                            <Search size={16} className="sm:w-5 smh-5" />
                        </button>
                    </div>
                </div>

                {/* Derecha ---- Acciones ----*/}
                <div className="flex items-center gap-4 sm:gap-6">

                    {/* Usamos el componente creado */}
                    <NavbarAction
                        icon={User}
                        label="Iniciar sesión"
                        hasCircle={true}
                    />

                    <NavbarAction
                        icon={ShoppingCart}
                        label="Carrito"
                        badge={10}
                    />
                </div>
            </div>
        </nav>
    );
}