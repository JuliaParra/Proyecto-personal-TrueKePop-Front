import AuthRepository from "@/core/apis/AuthRepository";

export default class AuthService {
    repo;
    credentials;

    constructor(credentials) {
        this.repo = new AuthRepository();
        this.credentials = credentials; // credentials debe ser un objeto con email y password
    }

    async login() {
        // Extraemos email y password de las credenciales
        const { email, password } = this.credentials;

        // Hacemos la solicitud de login al repositorio
        const response = await this.repo.login(email, password);

        // Retornamos la respuesta del repositorio
        return response;
    }
}
