import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { CalendarRoutingModule } from './calendar.routing';
import { DateService } from './services';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarService } from './services/calendar.service';
import { DayComponent } from './components/day/day.component';

@NgModule({
  declarations: [CalendarComponent, DayComponent],
  imports: [
    CalendarRoutingModule,
    SharedModule,
  ],
  providers: [
    DateService,
    CalendarService,
  ]
})
export class CalendarModule { }
