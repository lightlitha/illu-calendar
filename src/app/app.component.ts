import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'full-calendar';

  calendarOptions: CalendarOptions = {
    initialView: 'resourceTimeGridDay',
    datesAboveResources: true,
    plugins: [dayGridPlugin, timeGridPlugin, resourceTimeGridPlugin],
    events: [
      { title: 'Event 1', date: '2023-12-17T10:00:00' },
      { title: 'Event 2', date: '2023-12-18T14:30:00' }
    ],
    views: {
      resourceTimeGridDay: {
        dayHeaders: true,
        duration: { days: 7 },
        type: 'timeGrid'
      }
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }


}
