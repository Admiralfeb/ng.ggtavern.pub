import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from '../shared-module/components/error-not-found/error-not-found.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './menu.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { BytesComponent } from './components/bytes/bytes.component';
import { BitsComponent } from './components/bits/bits.component';
import { TapComponent } from './components/tap/tap.component';
import { ShotsComponent } from './components/shots/shots.component';
import { WineComponent } from './components/wine/wine.component';

const menuRoutes: Routes = [
    {
        path: '_', component: MenuComponent,
        children: [
            { path: 'main', component: MainComponent },
            { path: 'specialties', component: SpecialtiesComponent },
            { path: 'bits', component: BitsComponent },
            { path: 'bytes', component: BytesComponent },
            { path: 'tap', component: TapComponent },
            { path: 'shots', component: ShotsComponent },
            { path: 'wine', component: WineComponent },
            { path: '', redirectTo: 'specialties', pathMatch: 'full' },
            // { path: '**', component: ErrorNotFoundComponent },
        ]
    },
    { path: '', redirectTo: '_', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(menuRoutes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
