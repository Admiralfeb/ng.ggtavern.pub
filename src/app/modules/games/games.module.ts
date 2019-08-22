import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games.routing';
import { GamesComponent } from './games.component';
import { GameOptionsComponent } from './components/game-options/game-options.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [GamesComponent, GameOptionsComponent, MainComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
