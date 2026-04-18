// src/services/heroService.js

// Simulamos un delay de red (como una API real)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const heroService = {
    /**
     * Obtiene los slides del hero
     * En producción, esto sería: fetch('/api/hero/slides')
     */
    async getSlides() {
        try {
            // Simulamos delay de red (800ms)
            await delay(800);

            // En un proyecto real, aquí harías:
            // const response = await fetch('/api/hero/slides');
            // const data = await response.json();

            // Importamos el JSON local (simulando la respuesta de la API)
            const data = await import('../data/slides.json');

            return {
                success: true,
                data: data.slides,
                error: null
            };
        } catch (error) {
            console.error('Error fetching slides:', error);
            return {
                success: false,
                data: [],
                error: 'No se pudieron cargar los slides del hero'
            };
        }
    }
};