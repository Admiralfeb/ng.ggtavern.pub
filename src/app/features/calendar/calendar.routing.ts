import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from '@shared/components';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UnderConstructionComponent } from '@admiralfeb/under-construction';

const routes: Routes = [
  { path: 'home', component: CalendarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: '404', component: ErrorNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
