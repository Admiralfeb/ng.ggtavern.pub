import { Injectable } from '@angular/core';
import moment from 'moment-timezone';

@Injectable()
export class DateService {

  constructor() { }

  /**
   * @param year year to check
   * @param month month to check
   * @returns weekday number of the first day of the month
   */
  getFirstDayofMonth(year: number, month: number): number {
    return this.getDayofWeek(year, month, 1);
  }

  /**
   * @param year year to check
   * @param month month to check
   * @returns number of how many days are in the month
   */
  getNumberofDaysinMonth(year: number, month: number): number {
    return moment([year, month - 1]).daysInMonth();
  }

  /**
   * Gets day of week.
   * 0 = Sunday,
   * 1 = Monday,
   * 6 = Saturday,
   * etc.
   * @param year year to check
   * @param month month to check
   * @param day day to check
   * @returns day of week number.
   */
  getDayofWeek(year: number, month: number, day: number): number {
    return moment([year, month - 1, day]).day();
  }

  /**
   * @returns the current year number.
   */
  getCurrentYear(): number {
    return moment().year();
  }

  /**
   * @returns the current month number.
   */
  getCurrentMonth(): number {
    return moment().month() + 1;
  }
}
