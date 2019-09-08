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
  TreatsComponent,
} from './components';
import { LiquorsComponent } from './components/liquors/liquors.component';

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
    TreatsComponent,
    WineComponent,
    LiquorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
