import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';

import {
  MainComponent,
  BitsComponent,
  BottledComponent,
  BytesComponent,
  LiquorsComponent,
  ShotsComponent,
  SpecialtiesComponent,
  TapComponent,
  TreatsComponent,
  WineComponent,
  BaseMenuComponent,
} from './components';
import { MenuService } from './services/menu.service';

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
    BaseMenuComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MenuRoutingModule,
  ],
  providers: [MenuService]
})
export class MenuModule { }
