
import type {myEventsapiInterface} from '../infrastructure/myEventsApi'

class myEventsRepository {
  static instance:myEventsRepository;
  api: myEventsapiInterface | undefined;
  constructor(api: myEventsapiInterface) {
        if (myEventsRepository.instance) {
            return myEventsRepository.instance;
        }
        this.api = api;
    myEventsRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default myEventsRepository;
