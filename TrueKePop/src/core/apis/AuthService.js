import AuthRepository from "@/core/apis/AuthRepository";

export default class AuthService {
  constructor() {
    this.repo = new AuthRepository();
  }

  async login(email, password) {
    const response = await this.repo.login(email, password);
    return response;
  }
}
