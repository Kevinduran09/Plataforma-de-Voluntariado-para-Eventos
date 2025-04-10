
import type { myInscriptionsapiInterface } from '../infrastructure/inscriptionsApi'

class myEventsRepository {
  static instance:myEventsRepository;
  api: myInscriptionsapiInterface | undefined;
  constructor(api: myInscriptionsapiInterface) {
        if (myEventsRepository.instance) {
            return myEventsRepository.instance;
        }
        this.api = api;
    myEventsRepository.instance = this;
    }

  async getEventsInscription(userId:string) {
    return this.api?.getEventsByUser(userId)
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default myEventsRepository;
