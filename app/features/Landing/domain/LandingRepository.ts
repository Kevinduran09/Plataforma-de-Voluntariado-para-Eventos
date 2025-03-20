class LandingRepository {
  static instance;

    constructor(api) {
        if (LandingRepository.instance) {
            return LandingRepository.instance;
        }
        this.api = api;
    LandingRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data) {
        // Lógica para suscribirse
    }
}
export default LandingRepository;
