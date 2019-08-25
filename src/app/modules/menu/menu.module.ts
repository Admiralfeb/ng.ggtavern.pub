import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared-module.module';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';

import {
  MainComponent,
  BitsComponent,
  BottledComponent,
  BytesComponent,
  ShotsComponent,
  SpecialtiesComponent,
  TapComponent,
  WineComponent,
} from './components';

@NgModule({
  declarations: [
    MenuComponent,

    MainComponent,
    BitsComponent,
    BottledComponent,
    BytesComponent,
    ShotsComponent,
    SpecialtiesComponent,
    TapComponent,
    WineComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
