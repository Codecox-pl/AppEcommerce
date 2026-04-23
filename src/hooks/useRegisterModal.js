import { useState, useEffect } from "react";

export function useRegisterModal(isOpen) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasMinLength = password.length >= 8;

    // Reiniciar valores cuando se cierre el modal
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        hasUppercase,
        hasNumber,
        hasMinLength
    };
}
