export default function Button({ variant = "primary", size = "md", children }) {


    const baseClasses = "font-bold rounded transition-all duration-200 cursor-pointer";

    const variants = {
        primary: "bg-brand-accent text-black hover:bg-brand-accent-hover",
        outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black",
    };


    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3 text-lg"
    };


    const combinedClasses = `${baseClasses} ${variants[variant]} ${size[sizes]}`;

    return (
        <button className={combinedClasses}>
            {children}
        </button>
    );

}

