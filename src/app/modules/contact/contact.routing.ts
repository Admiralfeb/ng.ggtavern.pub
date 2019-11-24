import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorNotFoundComponent } from '@shared/components';
import { ContactComponent } from './contact.component';
import { ContactMainComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [
      { path: 'home', component: ContactMainComponent },
      { path: '404', component: ErrorNotFoundComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
