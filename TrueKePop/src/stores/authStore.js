
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userName: '', 
  }),
  actions: {
    login(name) {
      this.isAuthenticated = true;
      this.userName = name; 
    },
    logout() {
      this.isAuthenticated = false;
      this.userName = ''; 
    },
  },
});
