class AuthService {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async register(userInfo) {}

  async login(username, password) {}

  async logout() {}
}

export default AuthService;
