import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userName: '',
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.userName = user.name; // Asigna el nombre del usuario al iniciar sesión
    },
    logout() {
      this.isAuthenticated = false;
      this.userName = '';
    },
  },
});