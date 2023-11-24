import './calendars.scss';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import useCalendar from '../../calendar';
import { createEventId } from '../../data';


function Calendars() {

  const {currentEvents, setCurrentEvents} = useCalendar();

  async function handleEvents (e) {
     await Promise.resolve(setCurrentEvents(e))
  };

  function handleSelect (info) {
    let title = prompt("Please enter title for the event");
    let calendarAPI = info.view.calendar

    calendarAPI.unselect();

    if(title) {
      calendarAPI.addEvent({
        id: createEventId(),
        title,
        start: info.start,
        end: info.end,
        allDay: info.allDay
      });
    };
  };

  return (
    <div className='calendar'>
       
       <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    headerToolbar={{

                        left: 'prev,next today',
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"

                    }}

                    allDaySlot={false}
                    initialView="timeGridWeek"
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={currentEvents}
                    eventsSet={handleEvents}
                    select={handleSelect}
                />
           
    </div>
  )
}

export default Calendars