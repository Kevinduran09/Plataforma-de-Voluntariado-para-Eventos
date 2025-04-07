
import type {settingsapiInterface} from '../infrastructure/settingsApi'

class settingsRepository {
  static instance:settingsRepository;
  api: settingsapiInterface | undefined;
  constructor(api: settingsapiInterface) {
        if (settingsRepository.instance) {
            return settingsRepository.instance;
        }
        this.api = api;
    settingsRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default settingsRepository;
