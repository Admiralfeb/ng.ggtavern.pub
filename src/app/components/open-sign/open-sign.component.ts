import { Component, OnInit, OnDestroy } from '@angular/core';
import moment from 'moment-timezone';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HoursDialogComponent } from '../hours-dialog/hours-dialog.component';

@Component({
  selector: 'open-sign',
  templateUrl: './open-sign.component.html',
  styleUrls: ['./open-sign.component.scss']
})
export class OpenSignComponent implements OnInit, OnDestroy {
  hours = [
    { day: 0, open: '17:00', close: '00:00', name: 'Sunday' },
    { day: 1, open: '', close: '', name: 'Monday' },
    { day: 2, open: '17:00', close: '00:00', name: 'Tuesday' },
    { day: 3, open: '17:00', close: '00:00', name: 'Wednesday' },
    { day: 4, open: '17:00', close: '00:00', name: 'Thursday' },
    { day: 5, open: '17:00', close: '02:00', name: 'Friday' },
    { day: 6, open: '17:00', close: '02:00', name: 'Saturday' },
  ];
  timeSubscription: Subscription;
  currentDay: number;
  signMessage: string;
  isOpen = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    const time$ = interval(1000).pipe(
      map(() => moment().utc())
    );
    this.timeSubscription = time$.subscribe((currentMoment) => {
      this.isOpen = this.checkIsOpen(currentMoment);
      this.signMessage = this.isOpen ? 'Open' : 'Closed';
    });
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  checkIsOpen(currentTime: moment.Moment): boolean {
    let currentDay = currentTime.tz('America/Chicago').day();
    if (currentTime.hour() < 5) {
      currentDay--;
      if (currentDay < 0) {
        currentDay = 6;
      }
    }
    this.currentDay = currentDay;

    const todayHours = this.hours.find(h => h.day === currentDay);
    if (todayHours.open) {
      const openHours = todayHours.open.split(':');
      const closeHours = todayHours.close.split(':');

      let tempDay = moment().dayOfYear();
      if (currentTime.tz('America/Chicago').hour() < 5) {
        tempDay--;
      }
      const openTime = moment()
        .dayOfYear(tempDay)
        .hour(openHours[0] as unknown as number)
        .minute(openHours[1] as unknown as number);
      if (closeHours[0] as unknown as number < 5) {
        tempDay++;
      }
      const closeTime = moment()
        .dayOfYear(tempDay)
        .hour(closeHours[0] as unknown as number)
        .minute(closeHours[1] as unknown as number);

      const isOpen = currentTime.tz('America/Chicago').isBetween(openTime, closeTime);

      if (isOpen) { return true; }
    }

    return false;
  }

  showHours() {
    const dialogRef = this.dialog.open(HoursDialogComponent, {
      width: '400px',
      data: this.hours
    });
  }
}
