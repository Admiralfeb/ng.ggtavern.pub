import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event.model';
import { CalendarService } from '../../services/calendar.service';
import { AuthService } from '@core/services/auth.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
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
  authSubscription: Subscription;
  isLoggedIn = false;
  constructor(private calendar: CalendarService, private title: Title) { }

  ngOnInit() {
    this.onResize();
    this.getCalendar();
    // this.authSubscription = this.auth.getLoginState().subscribe((value: boolean) => {
    //   this.isLoggedIn = value;
    // });
    this.title.setTitle('GG Calendar');
  }

  ngOnDestroy(): void {
    // this.authSubscription.unsubscribe();
    this.title.setTitle('Grinning Goblin Gaming Tavern');
  }

  async getCalendar() {
    const calendar = await this.calendar.getCalendar();
    this.calendarName = calendar.name;
    this.startDay = calendar.startDay > 0 ? calendar.startDay + 1 : 0;
    this.calendarEvents = calendar.calendarEvents;
  }

  getDayofWeek(year: number, month: number, day: number): number {
    return this.calendar.getDayofWeek(year, month, day);
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
