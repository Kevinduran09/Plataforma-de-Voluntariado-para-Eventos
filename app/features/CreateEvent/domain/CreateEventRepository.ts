
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

  async postData(data: any) {
    const response = await this.api?.createEvent(data);
        if (!response || response.length === 0) {
            return null;
        }
        return response;
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default CreateEventRepository;
