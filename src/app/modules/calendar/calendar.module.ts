import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared-module.module';

import { CalendarRoutingModule } from './calendar.routing';
import { DateService } from './services';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
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
