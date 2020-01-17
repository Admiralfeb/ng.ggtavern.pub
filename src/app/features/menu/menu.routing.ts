import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorNotFoundComponent } from '@shared/components';

import { MenuComponent } from './menu.component';

import {
    MainComponent,
} from './components';
import { MenuSectionComponent } from './components/_menu-section/menu-section.component';

const menuRoutes: Routes = [
    {
        path: '', component: MenuComponent,
        children: [
            { path: 'home', component: MainComponent },
            { path: '404', component: ErrorNotFoundComponent },
            { path: ':id', component: MenuSectionComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: '404', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(menuRoutes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
