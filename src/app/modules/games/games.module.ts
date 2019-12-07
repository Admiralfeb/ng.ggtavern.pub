import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games.routing';

import { SharedModule } from '@shared/shared.module';

import { GamesComponent } from './games.component';
import { GameOptionsComponent, MainComponent } from './components';


@NgModule({
  declarations: [
    GamesComponent,
    GameOptionsComponent,
    MainComponent
  ],
  imports: [
    GamesRoutingModule,
    SharedModule,
  ]
})
export class GamesModule { }
