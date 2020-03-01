import { Component, Input } from '@angular/core';
import { CalendarEvent } from '@features/calendar/models/calendar-event.model';

@Component({
  selector: 'calendar-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input() event: CalendarEvent;
  constructor() { }
}
