
import FullCalendar, { DatePointApi, DateSelectArg } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import interactionPlugin from "@fullcalendar/interaction"

import calendarStyle from "./calendarStyle.module.scss";
import { Calendar } from 'antd';

//<CalendarDrawer event={eventEmulator} 
export function CalendarDrawer(props: any) {
  let eventGuid = 0;

  function createEventId() {
    return String(eventGuid++);
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  function onPanelChange(value:any, mode:any) {
    alert(value);
  }
  

  /*  const handleDateClick = (arg: DatePointApi) => { 
     alert(arg.dateStr)
   } */
  return (
    <div className={calendarStyle.main}>
 
      
   {/*    <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        themeSystem={'bootstrap'}
        height = {650}
        
        
        events={props.event}
      /> */}
<Calendar onPanelChange={onPanelChange} />
    </div>
  )
}