import { EventDashboardApi } from '../infrastructure/EventDashboardApi';

class EventDashboardRepository {
  static instance: EventDashboardRepository;
  api: typeof EventDashboardApi | undefined;

  constructor(api: typeof EventDashboardApi) {
    if (EventDashboardRepository.instance) {
      return EventDashboardRepository.instance;
    }
    this.api = api;
    EventDashboardRepository.instance = this;
  }

  async getData() {
    return this.api?.getInfo()
  }

  async subscribe(data: any) {
    // Lógica para suscribirse
  }
}
export default EventDashboardRepository;
