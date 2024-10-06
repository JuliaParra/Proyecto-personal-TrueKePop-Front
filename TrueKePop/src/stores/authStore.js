import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post('api/login', { email, password });
                // Verifica la respuesta aquí
                if (response.status === 200) {
                    this.user = response.data; // Almacena el usuario autenticado
                    return response.data; // Devuelve la respuesta al controlador
                }
            } catch (error) {
                console.error('Error durante el inicio de sesión:', error);
                throw error; // Lanza el error para que el controlador lo maneje
            }
        },
    },
});
