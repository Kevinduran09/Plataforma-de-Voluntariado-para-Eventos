
import type {ExploreapiInterface} from '../infrastructure/ExploreApi'

class ExploreRepository {
  static instance:ExploreRepository;
  api: ExploreapiInterface | undefined;
  constructor(api: ExploreapiInterface) {
        if (ExploreRepository.instance) {
            return ExploreRepository.instance;
        }
        this.api = api;
    ExploreRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default ExploreRepository;
