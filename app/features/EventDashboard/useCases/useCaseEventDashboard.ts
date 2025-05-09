import EventDashboardRepository from '../domain/EventDashboardRepository';
import { EventDashboardApi } from '../infrastructure/EventDashboardApi';

export const GetEventDashboard = async () => {
    const repository = new EventDashboardRepository(EventDashboardApi);
    return repository.getData() ;
};



export const GetInscriptionEventsLimit = async (userId: string) => {
    const repository = new EventDashboardRepository(EventDashboardApi);
    return repository.geInscriptionEventsLimit(userId);
};