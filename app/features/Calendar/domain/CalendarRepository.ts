
import type {CalendarapiInterface} from '../infrastructure/CalendarApi'

class CalendarRepository {
  static instance:CalendarRepository;
  api: CalendarapiInterface | undefined;
  constructor(api: CalendarapiInterface) {
        if (CalendarRepository.instance) {
            return CalendarRepository.instance;
        }
        this.api = api;
    CalendarRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default CalendarRepository;
