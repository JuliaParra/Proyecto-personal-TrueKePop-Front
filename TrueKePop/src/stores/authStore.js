import { defineStore } from 'pinia';
import AuthRepository from '@/core/apis/AuthRepository';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      const authRepository = new AuthRepository();
      const credentials = {
        email: email,
        password: password,
      };
      try {
        const response = await authRepository.login(credentials);
        if (response && response.email) {
          this.user = response;
          this.isAuthenticated = true;
          return response;
        } else {
          throw new Error('Respuesta inválida del servidor');
        }
      } catch (error) {
        console.error('Error en login:', error);
        throw error;
      }
    },
  },
});
