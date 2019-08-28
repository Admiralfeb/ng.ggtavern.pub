import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared-module.module';

import { CalendarRoutingModule } from './calendar.routing';
import { DateService } from './services';

@NgModule({
  declarations: [],
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
