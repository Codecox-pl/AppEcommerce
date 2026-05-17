import { useState, useEffect, useRef } from "react";
import MOCK_PRODUCTS from "../data/productos.json";

export function useSearchModal(isOpen) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setSearchTerm("");
            setResults([]);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setResults([]);
            return;
        }

        const filtered = MOCK_PRODUCTS.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 1); // Limit to 1 result
        setResults(filtered);
    }, [searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        results,
        inputRef
    };
}
