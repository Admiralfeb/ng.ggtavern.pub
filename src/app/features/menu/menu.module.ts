import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';

import {
  MainComponent,
  BottledComponent,
  LiquorsComponent,
  DrinkComponent,
  TapComponent,
  WineComponent,
} from './components';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    MenuComponent,

    MainComponent,
    BottledComponent,
    DrinkComponent,
    TapComponent,
    WineComponent,
    LiquorsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MenuRoutingModule,
  ],
  providers: [MenuService]
})
export class MenuModule { }
