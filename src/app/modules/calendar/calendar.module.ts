import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { CalendarRoutingModule } from './calendar.routing';
import { DateService } from './services';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  declarations: [CalendarComponent, EventComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule,
  ],
  providers: [
    DateService
  ]
})
export class CalendarModule { }
