import axios from "axios";

export default class AuthRepository {
  constructor() {
      this.baseUrl = import.meta.env.VITE_API_ENDPOINT_TRUEKEPOP;
  }

  async login(credentials) {
      try {
          const response = await axios.post(this.baseUrl + '/login', credentials, {
              withCredentials: true
          });
          return response.data;
      } catch (error) {
          console.error('Error en la solicitud de login:', error);
          throw error;
      }
  }
}
