import { Injectable } from '@angular/core';
import moment from 'moment-timezone';

@Injectable()
export class DateService {

  constructor() { }

  getFirstDayofMonth(year: number, month: number): number {
    return this.getDayofWeek(year, month, 1);
  }

  getNumberofDaysinMonth(year: number, month: number): number {
    return moment([year, month - 1]).daysInMonth();
  }

  /**
   * Gets day of week.
   * 0 = Sunday,
   * 1 = Monday,
   * 6 = Saturday,
   * etc.
   */
  getDayofWeek(year: number, month: number, day: number): number {
    return moment([year, month - 1, day]).day();
  }
}
