import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games.routing';
import { GamesComponent } from './games.component';
import { GameOptionsComponent } from './components/game-options/game-options.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [GamesComponent, GameOptionsComponent, MainComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
  ]
})
export class GamesModule { }
