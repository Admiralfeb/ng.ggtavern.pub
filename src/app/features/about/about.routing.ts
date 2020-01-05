import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorNotFoundComponent } from '@shared/components';
import { AboutComponent } from './about.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      { path: 'staff', component: StaffComponent },
      { path: '404', component: ErrorNotFoundComponent },
      { path: '', redirectTo: 'staff', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
