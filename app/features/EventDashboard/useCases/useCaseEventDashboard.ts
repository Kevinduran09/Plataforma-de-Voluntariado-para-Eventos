import EventDashboardRepository from '../domain/EventDashboardRepository';
import { EventDashboardApi } from '../infrastructure/EventDashboardApi';
export const GetEventDashboard = async () => {
    const repository = new EventDashboardRepository(EventDashboardApi);
    return repository.getData();
};

export const SubscribeEventDashboard = async (data:any) => {
    const repository = new EventDashboardRepository(EventDashboardApi);
    return repository.subscribe(data);
};