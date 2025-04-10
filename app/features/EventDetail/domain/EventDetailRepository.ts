import type { EventDetailapiInterface } from '../infrastructure/EventDetailApi';
import type { Evento, Tarea } from '~/features/EventDashboard/domain/EventDashboard';

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
    const data = await this.api?.fetchData(id);
    if (!data) {
      throw new Error('Evento no encontrado');
    }
    return data as Evento;
  }

  async Issubscribe(idUser: string, idEvent: string) {
    const data = await this.api?.isSubscribe(idEvent, idUser)
    if (!data) {
      throw new Error('Error al verificar la suscripción');
    }
    return data.length > 0 ? true : false;
  }
  async SuscribeToEvent(idUser: string, idEvent: string) {
    const suscripción = {
      eventoId: idEvent,
      usuarioId: idUser,
      fecha_inscripcion: new Date().toISOString()
    }
    const data = await this.api?.inscripeToEvent(suscripción)
    if (!data) {
      throw new Error('Error al crear la inscripcion')
    }
    return data
  }

  async unSubscribetoEvent(idUser: string, idEvent: string){
    const data = await this.api?.unSubcrip({ userId: idUser, eventId: idEvent })
    if (!data) {
      throw new Error('Error al crear la inscripcion')
    }
    return data
  }
  async CompleteTask(new_tareas:Tarea[],idEvento:string){
    const data = await this.api?.changeTaskState(new_tareas, idEvento)
    console.log(data);
    
    if(!data.success){
      throw new Error('error en los datos')
    }
    return data
  }
}
export default EventDetailRepository;
