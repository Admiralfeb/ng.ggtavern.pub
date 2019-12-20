import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  constructor() { }

  ngOnInit() {
  }

  openModal(): void {
    const modal = document.getElementsByTagName('img-modal')[0] as HTMLElement;
    modal.className = '';
  }

  closeModal(): void {
    const modal = document.getElementsByTagName('img-modal')[0] as HTMLElement;
    modal.className = 'hidden';
  }
}
