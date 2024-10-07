import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userName: '',
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.userName = user.name; 
    },
    logout() {
      this.isAuthenticated = false;
      this.userName = '';
    },
  },
});