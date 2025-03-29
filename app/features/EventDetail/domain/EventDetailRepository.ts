import type { EventDetailapiInterface } from '../infrastructure/EventDetailApi';
import type { Evento } from '~/features/EventDashboard/domain/EventDashboard';

class EventDetailRepository {
  static instance: EventDetailRepository;
  api: EventDetailapiInterface | undefined;

  constructor(api: EventDetailapiInterface) {
    if (EventDetailRepository.instance) {
      return EventDetailRepository.instance;
    }
    this.api = api;
    EventDetailRepository.instance = this;
  }

  async getData(id: string): Promise<Evento> {
    const data = await this.api?.fetchData(`http://localhost:3000/eventos/${id}`);
    if (!data) {
      throw new Error('Evento no encontrado');
    }
    return data as Evento;
  }

  async subscribe(data: any) {
    // Lógica para suscribirse
  }
}
export default EventDetailRepository;
