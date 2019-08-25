import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { GameOptionsComponent } from './components/game-options/game-options.component';
import { MainComponent } from './components/main/main.component';
import { ErrorNotFoundComponent } from '../shared-module/components/error-not-found/error-not-found.component';

const routes: Routes = [
  {
    path: '', component: GamesComponent, children: [
      { path: 'home', component: MainComponent },
      { path: '404', component: ErrorNotFoundComponent },
      { path: ':id', component: GameOptionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
