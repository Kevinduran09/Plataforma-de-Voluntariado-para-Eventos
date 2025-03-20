
import type {CreateEventapiInterface} from '../infrastructure/CreateEventApi'

class CreateEventRepository {
  static instance:CreateEventRepository;
  api: CreateEventapiInterface | undefined;
  constructor(api: CreateEventapiInterface) {
        if (CreateEventRepository.instance) {
            return CreateEventRepository.instance;
        }
        this.api = api;
    CreateEventRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default CreateEventRepository;
