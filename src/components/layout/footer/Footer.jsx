import { MapPin, Phone, Mail, CreditCard } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-surface text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Grid principal de enlaces */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Columna 1: Marca y Contacto */}
                    <div className="flex flex-col gap-6">
                        <span className="text-3xl font-black italic tracking-tighter text-brand-accent">
                            REMATAZO
                        </span>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Tu tienda de confianza para encontrar las mejores ofertas en tecnología, hogar y más. Todo lo que necesitas, a un clic de distancia.
                        </p>
                        
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex items-center gap-3 text-sm hover:text-brand-accent transition-colors cursor-pointer">
                                <MapPin className="w-4 h-4 text-brand-accent" />
                                <span>Av. Principal 123, Lima, Perú</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm hover:text-brand-accent transition-colors cursor-pointer">
                                <Phone className="w-4 h-4 text-brand-accent" />
                                <span>+51 987 654 321</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm hover:text-brand-accent transition-colors cursor-pointer">
                                <Mail className="w-4 h-4 text-brand-accent" />
                                <span>contacto@rematazo.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna 2: Servicio al Cliente */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg mb-2">Servicio al Cliente</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Centro de Ayuda</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Seguimiento de Pedido</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Cambios y Devoluciones</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Métodos de Envío</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Garantía de Productos</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Sobre Nosotros */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg mb-2">Sobre Nosotros</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Quiénes Somos</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Nuestras Tiendas</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Trabaja con Nosotros</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Vende en Rematazo</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Blog Corporativo</a></li>
                        </ul>
                    </div>

                    {/* Columna 4: Legales e Información */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg mb-2">Información Legal</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Políticas de Privacidad</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Uso de Cookies</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-accent underline">Libro de Reclamaciones</a></li>
                        </ul>
                    </div>

                </div>

                {/* Separador */}
                <div className="w-full border-t border-gray-800 my-8"></div>

                {/* Sección Inferior: Pagos, Redes Sociales y Copyright */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    
                    {/* Redes Sociales */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent text-white transition-all hover:scale-110">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent text-white transition-all hover:scale-110">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent text-white transition-all hover:scale-110">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent text-white transition-all hover:scale-110">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.08 3.27-6.08 3.27z" /></svg>
                        </a>
                    </div>

                    {/* Métodos de Pago */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <span className="text-sm font-semibold text-gray-400">Medios de Pago:</span>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <div className="px-3 py-1 bg-white rounded flex items-center justify-center h-8">
                                <span className="text-xs font-black text-blue-900 italic">VISA</span>
                            </div>
                            <div className="px-3 py-1 bg-white rounded flex items-center justify-center h-8">
                                <span className="text-xs font-bold text-red-600">Master<span className="text-orange-500">Card</span></span>
                            </div>
                            <div className="px-3 py-1 bg-[#00A19B] rounded flex items-center justify-center h-8">
                                <span className="text-xs font-bold text-white">Yape</span>
                            </div>
                            <div className="px-3 py-1 bg-[#EE2740] rounded flex items-center justify-center h-8">
                                <span className="text-xs font-bold text-white">Plin</span>
                            </div>
                            <div className="px-3 py-1 bg-gray-800 rounded border border-gray-700 flex items-center justify-center h-8">
                                <CreditCard className="w-4 h-4 text-gray-300" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-8 text-center lg:text-left text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Rematazo E-Commerce. Todos los derechos reservados. Desarrollado con 💚.</p>
                </div>

            </div>
        </footer>
    );
}
