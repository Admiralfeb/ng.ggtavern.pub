import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event.model';

@Component({
  selector: 'calendar-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() event: CalendarEvent;
  date = 0;
  eventName: string;
  time: string;
  constructor() { }

  ngOnInit() {
    this.date = this.event.day;
    this.eventName = this.event.eventName;
    this.time = this.event.time;
  }

}
