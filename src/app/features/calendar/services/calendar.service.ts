import { Injectable } from '@angular/core';
import { DateService } from './date.service';
import { Month } from '../models/month.model';
import { CalendarEvent } from '../models/calendar-event.model';
import { Calendar } from '../models/calendar.model';
import { DatabaseService } from '@core/services/database.service';
import { SortService } from '@core/services/sort.service';

@Injectable()
export class CalendarService {
  private calendars: Calendar[];
  constructor(private dateService: DateService, private db: DatabaseService, private sort: SortService) { }

  async getCalendar(): Promise<Calendar> {
    if (!this.calendars) {
      this.calendars = await this.getCalendars();
    }
    return this.getCurrentCalendar();
  }

  private getCurrentCalendar(): Calendar {
    const year = this.dateService.getCurrentYear();
    const month = this.dateService.getCurrentMonth();
    const monthString: string = (month < 10) ? `0${month}` : month.toString();
    const currentID = `${year}-${monthString}`;
    const currentCalendar = this.calendars.filter(calendar => calendar.id === currentID)[0];
    if (currentCalendar) {
      return currentCalendar;
    }
    return this.calendars[0];
  }

  getDayofWeek(year: number, month: number, day: number) {
    return this.dateService.getDayofWeek(year, month, day);
  }

  private async getCalendars(): Promise<Calendar[]> {
    let months = await this.db.getItemswithID<Month>('calendar');
    months = this.sort.sortItemsReverse(months, 'id');
    return months.map((month) => {
      const id = month.id;
      const name = month.name;
      const calendarEvents = this.generateCalendar(month);
      const startDay = this.getStartDay(month);
      return { id, name, startDay, calendarEvents };
    });
  }

  private getStartDay(month: Month): number {
    return this.dateService.getFirstDayofMonth(month.year, month.month);
  }

  private generateCalendar(monthConfig: Month): CalendarEvent[] {
    const year = monthConfig.year;
    const month = monthConfig.month;
    const daysInMonth = this.dateService.getNumberofDaysinMonth(year, month);
    let events: CalendarEvent[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      let event: CalendarEvent = null;
      // Get the date
      const date = i;

      // Set Specific Event
      const specificEvents = monthConfig.events;
      if (specificEvents) {
        const specEvent = specificEvents.filter(x => x.day === date);
        if (specEvent.length > 0) {
          if (specEvent.length > 1) {
            console.error(`There are more than 1 specific events on day ${date}. Only using first found event.`);
          }
          console.log({ specEvent });
          const eventName = specEvent[0].eventName;
          const imgString = specEvent[0].imgString;
          const startTime = specEvent[0].time;
          event = { year, month, day: date, eventName, imgString, time: startTime };
        }
      }

      // Set Weekly Event if specific event has not been set
      if (!event) {
        const dayofWeek = this.dateService.getDayofWeek(year, month, date);
        const weeklyEvents = monthConfig.weeklies;
        if (weeklyEvents) {
          const weeklyEvent = weeklyEvents.filter(x => x.day === dayofWeek);
          if (weeklyEvent.length > 0) {
            if (weeklyEvent.length > 1) {
              console.error(`There are more than 1 weekly events on weekday ${dayofWeek}. Only using first found event.`);
            }
            const eventName = weeklyEvent[0].eventName;
            const imgString = weeklyEvent[0].imgString;
            let startTime: string = null;
            if (weeklyEvent[0].time) {
              startTime = weeklyEvent[0].time;
            }
            event = { year, month, day: date, eventName, imgString, time: startTime };
          }
        }
      }

      // Set default blank events if a day does not have one specified.
      if (!event) {
        event = { year, month, day: date, eventName: null, imgString: null, time: null };
      }

      events = [...events, event];
    }
    return events;
  }


}
