import { Injectable } from '@angular/core';
import { DateService } from './date.service';
import { Month } from '../models/month.model';
import { CalendarEvent } from '../models/calendar-event.model';
import { Calendar } from '../models/calendar.model';
import { DatabaseService } from '@core/services/database.service';

@Injectable()
export class CalendarService {

  constructor(private dateService: DateService, private db: DatabaseService) { }

  async getCalendar(): Promise<Calendar> {
    const data = await this.getCalendarData();
    const name = data[0].name;
    const events = this.generateCalendar(data[0]);
    const start = this.getStartDay(data[0]);
    return { name, startDay: start, calendarEvents: events };
  }

  getDay(year: number, month: number, day: number) {
    return this.dateService.getDayofWeek(year, month, day);
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

      // Set Weekly Event if specific event has not been set
      if (!event) {
        const dayofWeek = this.dateService.getDayofWeek(year, month, date);
        const weeklyEvents = monthConfig.weeklies;
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

      // Set default blank events if a day does not have one specified.
      if (!event) {
        event = { year, month, day: date, eventName: null, imgString: null, time: null };
      }

      events = [...events, event];
    }
    return events;
  }

  private async getCalendarData(): Promise<Month[]> {
    return this.db.getItems<Month>('calendar');
  }
}
