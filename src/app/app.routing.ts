import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent, UnderConstructionComponent } from '@shared/components';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: 'menu', loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule) },
  { path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
  { path: '404', component: ErrorNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
