

export default function NavbarAction({ icon: Icon, label, badge, hasCircle, onClick }) {
    return (
        //Contenedor
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onClick}>

            {/* Area del Icono*/}
            <div className={`
        relative flex items-center justify-center transition-all duration-300
        text-gray-950 group-hover:text-brand-accent
        
        /* LÓGICA CONDICIONAL: Solo si tiene círculo */
        ${hasCircle ? 'w-8 h-8 rounded-full border-2 border-gray-600 group-hover:border-brand-accent' : ''}
      `}>
                {/* Renderizamos el icono pasado por props */}
                <Icon size={hasCircle ? 16 : 20} />

                {/* Badge */}
                {badge !== undefined && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold min-w-4 h-4 px-1 flex items-center justify-center rounded-full">
                        {badge}
                    </span>
                )}
            </div>

            {/* Area del texto */}
            <span className="hidden sm:inline text-sm font-medium text-gray-950 group-hover:text-brand-accent transition-colors">
                {label}
            </span>
        </div>
    );
}