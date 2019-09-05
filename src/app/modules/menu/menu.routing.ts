import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorNotFoundComponent } from '@shared/components';

import { MenuComponent } from './menu.component';

import {
    MainComponent,
    BitsComponent,
    BottledComponent,
    BytesComponent,
    ShotsComponent,
    SpecialtiesComponent,
    TapComponent,
    TreatsComponent,
    WineComponent,
} from './components';

const menuRoutes: Routes = [
    {
        path: '', component: MenuComponent,
        children: [
            { path: 'home', component: MainComponent },
            { path: 'specialties', component: SpecialtiesComponent },
            { path: 'bits', component: BitsComponent },
            { path: 'bottled', component: BottledComponent },
            { path: 'bytes', component: BytesComponent },
            { path: 'tap', component: TapComponent },
            { path: 'treats', component: TreatsComponent },
            { path: 'shots', component: ShotsComponent },
            { path: 'wine', component: WineComponent },
            { path: '404', component: ErrorNotFoundComponent },
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
