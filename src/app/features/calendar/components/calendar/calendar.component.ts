import { Component, OnInit, HostListener } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event.model';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  readonly weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  readonly weekdaysMobile = [
    'Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'
  ];

  calendarName = '';
  startDay = 0;
  calendarEvents: CalendarEvent[] = [];
  innerWidth = 0;
  minWidth = 900;
  mobile = false;
  constructor(private calendar: CalendarService) { }

  ngOnInit() {
    this.onResize();
    this.getCalendar();
  }

  async getCalendar() {
    const calendar = await this.calendar.getCalendar();
    this.calendarName = calendar.name;
    this.startDay = calendar.startDay;
    this.calendarEvents = calendar.calendarEvents;
  }

  getDay(year: number, month: number, day: number): number {
    return this.calendar.getDay(year, month, day);
  }

  @HostListener('window:resize')
  onResize() {
    this.mobile = this.checkforMobileSize();
  }

  checkforMobileSize(): boolean {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > this.minWidth) {
      return false;
    } else {
      return true;
    }
  }
}
