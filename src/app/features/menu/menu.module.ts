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
import { MenuSectionComponent } from './components/_menu-section/menu-section.component';
import { FoodItemwFriesComponent } from './components/foodItemwfries/foodItemwfries.component';
import { MiscFoodItemComponent } from './components/miscfooditem/miscfooditem.component';

@NgModule({
  declarations: [
    MenuComponent,

    MainComponent,
    BottledComponent,
    DrinkComponent,
    FoodItemwFriesComponent,
    MiscFoodItemComponent,
    TapComponent,
    WineComponent,
    LiquorsComponent,
    MenuSectionComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MenuRoutingModule,
  ],
  providers: [MenuService]
})
export class MenuModule { }
