export default function Button({ variant = "primary", size = "md", className = "", children, ...props }) {

    const baseClasses = "font-bold rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]";

    const variants = {
        primary: "bg-brand-accent text-black hover:bg-opacity-90 shadow-md hover:shadow-lg shadow-brand-accent/20",
        outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg"
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}

