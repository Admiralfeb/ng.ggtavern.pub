import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games.routing';

import { SharedModule } from '@shared/shared.module';

import { GamesComponent } from './games.component';
import { GameOptionsComponent, MainComponent } from './components';
import { GamesService } from './services/games.service';
import { GameDialogComponent } from './components/game-dialog/game-dialog.component';
import { SystemDialogComponent } from './components/system-dialog/system-dialog.component';


@NgModule({
  declarations: [
    GamesComponent,
    GameOptionsComponent,
    MainComponent,
    GameDialogComponent,
    SystemDialogComponent
  ],
  imports: [
    GamesRoutingModule,
    SharedModule,
  ],
  providers: [GamesService]
})
export class GamesModule { }
