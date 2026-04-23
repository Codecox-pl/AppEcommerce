import { X, Check } from "lucide-react";
import { useRegisterModal } from "../../../hooks/useRegisterModal";

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        hasUppercase,
        hasNumber,
        hasMinLength
    } = useRegisterModal(isOpen);

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
                        Regístrate
                    </h2>

                    <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-1">
                            <label className="text-[13px] text-gray-600 font-medium">
                                Correo
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-brand-accent transition-colors bg-white text-brand-text-main text-[14px]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[13px] text-gray-600 font-medium">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-brand-accent transition-colors bg-white text-brand-text-main text-[14px]"
                            />

                            {/* Requisitos de Contraseña */}
                            <div className="flex flex-col gap-1 mt-1.5 px-1">
                                <div className={`flex items-center gap-1.5 text-[12px] ${password.length === 0 ? "text-gray-400" : (hasUppercase ? "text-brand-accent" : "text-red-500")}`}>
                                    {hasUppercase || password.length === 0 ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
                                    <span>1 mayúscula</span>
                                </div>
                                <div className={`flex items-center gap-1.5 text-[12px] ${password.length === 0 ? "text-gray-400" : (hasNumber ? "text-brand-accent" : "text-red-500")}`}>
                                    {hasNumber || password.length === 0 ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
                                    <span>1 número</span>
                                </div>
                                <div className={`flex items-center gap-1.5 text-[12px] ${password.length === 0 ? "text-gray-400" : (hasMinLength ? "text-brand-accent" : "text-red-500")}`}>
                                    {hasMinLength || password.length === 0 ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
                                    <span>Mínimo 8 caracteres</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-2 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-hover transition-colors shadow-sm text-[15px] cursor-pointer">
                            Regístrate
                        </button>
                    </form>

                    <div className="mt-6 flex justify-center">
                        <span className="text-[13.5px] text-gray-600 font-medium">
                            ¿Ya tienes una cuenta?{" "}
                            <button
                                onClick={onSwitchToLogin}
                                className="text-brand-accent hover:underline font-bold cursor-pointer"
                            >
                                Iniciar sesión
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
