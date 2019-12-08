import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorNotFoundComponent } from '@shared/components';

import { GamesComponent } from './games.component';
import { GameOptionsComponent, MainComponent } from './components';

const routes: Routes = [
  {
    path: '', component: GamesComponent, children: [
      { path: 'home', component: MainComponent },
      { path: '404', component: ErrorNotFoundComponent },
      { path: ':id', component: GameOptionsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
