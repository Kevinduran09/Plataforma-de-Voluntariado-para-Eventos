
import type {inscriptionsapiInterface} from '../infrastructure/inscriptionsApi'

class inscriptionsRepository {
  static instance:inscriptionsRepository;
  api: inscriptionsapiInterface | undefined;
  constructor(api: inscriptionsapiInterface) {
        if (inscriptionsRepository.instance) {
            return inscriptionsRepository.instance;
        }
        this.api = api;
    inscriptionsRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default inscriptionsRepository;
