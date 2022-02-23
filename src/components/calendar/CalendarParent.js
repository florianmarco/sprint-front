
import React,{useState} from 'react';
import FullCalendar from '@fullcalendar/react'; 
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid' ;
import DashboardCalendar from '../dashboard/DashboardCalendar';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';



const CalendarParent = () => {


   
      const [sprint, setSprint] = useState([{ // this object will be "parsed" into an Event Object
      title: 'Création du SI Sprint', // a property!
      start: '2022-02-28', // a property!
      end: '2022-02-30' // a property! ** see important note below about 'end' **
      }]);

      const [currentEvents,setCurrentEvents] = useState();

      const handleEvents = ((events) => {
        setCurrentEvents(events)
      })
    


      const handleEventClick =((clickInfo) => {
          
        if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
        }

      })

      const  handleDateSelect = ((selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      })


    return (
      
        <>
        <DashboardCalendar/>
            
        <FullCalendar
        plugins={[ dayGridPlugin,listPlugin,interactionPlugin]}
        
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialView="dayGridMonth"
        weekends={true}
        events={sprint}
        eventClick={handleEventClick}
        select={handleDateSelect}
        eventsSet={handleEvents}
        
      />
</>
        
    );
};

export default CalendarParent;