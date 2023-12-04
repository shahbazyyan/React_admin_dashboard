import { INITIAL_EVENTS } from './data';

const useCalendar = ((set) => ({
    currentEvents: INITIAL_EVENTS,
    setCurrentEvents: (events) => set({currentEvents: events})
}));

export default useCalendar;