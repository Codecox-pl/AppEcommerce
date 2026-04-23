import { X } from "lucide-react";

export default function AuthModal({ isOpen, onClose, onSwitchToRegister }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={onClose} />

            {/* Modal Container */}
            <div className="relative bg-white w-full max-w-105 rounded-xl shadow-2xl flex flex-col overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-1 text-gray-500 hover:text-black transition-colors z-10 cursor-pointer"
                >
                    <X size={26} strokeWidth={2.5} />
                </button>

                <div className="p-6 sm:p-8 flex flex-col">
                    <h2 className="text-xl font-bold text-center text-brand-text-main mb-5 mt-1">
                        Iniciar sesión
                    </h2>

                    <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-1">
                            <label className="text-[13px] text-gray-600 font-medium">
                                Correo
                            </label>
                            <input
                                type="email"
                                placeholder="prueba1234@gmail.com"
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-brand-accent transition-colors bg-white text-brand-text-main placeholder-gray-400 text-[14px]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[13px] text-gray-600 font-medium">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-brand-accent transition-colors bg-white text-brand-text-main text-[14px]"
                            />
                        </div>

                        <div className="flex justify-start mt-0 mb-1.5">
                            <a href="#" className="text-[13.5px] text-brand-text-main hover:text-brand-accent underline underline-offset-4 transition-colors">
                                Olvidé mi contraseña
                            </a>
                        </div>

                        <button className="w-full mt-1 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-hover transition-colors shadow-sm text-[15px] cursor-pointer">
                            Ingresar
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-[13px] text-gray-500 font-medium whitespace-nowrap">o inicia sesión con</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    <div className="flex justify-center w-full">
                        <button className="flex items-center justify-center gap-3 w-full py-2.5 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm cursor-pointer">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            <span className="font-bold text-gray-700 text-[14.5px]">Google</span>
                        </button>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-3">
                        <span className="text-[13.5px] text-gray-600 font-medium">
                            ¿No tienes una cuenta?
                        </span>
                        <button 
                            onClick={onSwitchToRegister}
                            className="w-full py-2.5 border-2 border-brand-accent text-brand-accent font-bold rounded-lg hover:bg-brand-accent/5 transition-colors cursor-pointer text-[15px]"
                        >
                            Regístrate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
