import { useState, useEffect } from "react";
import ubicacionesData from "../data/ubicaciones.json";

export function useLocationModal(isOpen, onClose, onSelect) {
    const [selectedDepartamento, setSelectedDepartamento] = useState("");
    const [selectedProvincia, setSelectedProvincia] = useState("");
    const [selectedDistrito, setSelectedDistrito] = useState("");

    // Reiniciar valores cuando se cierre el modal
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setSelectedDepartamento("");
                setSelectedProvincia("");
                setSelectedDistrito("");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleAccept = () => {
        const dep = ubicacionesData.find(d => d.id === selectedDepartamento);
        const prov = dep?.provincias.find(p => p.id === selectedProvincia);
        const dist = prov?.distritos.find(d => d.id === selectedDistrito);
        
        onSelect({
            departamento: dep,
            provincia: prov,
            distrito: dist
        });
        onClose();
    };

    const depObj = ubicacionesData.find(d => d.id === selectedDepartamento);
    const provincias = depObj?.provincias || [];
    const provObj = provincias.find(p => p.id === selectedProvincia);
    const distritos = provObj?.distritos || [];

    const isComplete = selectedDepartamento && selectedProvincia && selectedDistrito;

    return {
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
    };
}
