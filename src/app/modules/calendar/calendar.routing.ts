import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent, UnderConstructionComponent } from '@shared/components';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'underconstruction', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: '404', component: ErrorNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
