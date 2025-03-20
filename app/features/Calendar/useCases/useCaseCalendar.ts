import CalendarRepository from '../domain/CalendarRepository';
import {CalendarApi} from '../infrastructure/CalendarApi'
export const GetCalendar = async () => {
    const repository = new CalendarRepository(CalendarApi);
    return repository.getData();
};

export const SubscribeCalendar = async (data:any) => {
    const repository = new CalendarRepository(CalendarApi);
    return repository.subscribe(data);
};