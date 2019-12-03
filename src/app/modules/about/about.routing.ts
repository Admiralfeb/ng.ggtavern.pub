import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorNotFoundComponent } from '@shared/components';
import { AboutComponent } from './about.component';
import { AboutMainComponent } from './components/about-main/about-main.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      { path: 'home', component: AboutMainComponent },
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
export class AboutRoutingModule { }
