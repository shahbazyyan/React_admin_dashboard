import { INITIAL_EVENTS } from './data';

const useCalendar = ((set: any) => ({
    currentEvents: INITIAL_EVENTS,
    setCurrentEvents: (events: unknown) => set({currentEvents: events})
}));

export default useCalendar;