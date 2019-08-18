import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu.routing';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { BytesComponent } from './components/bytes/bytes.component';
import { BitsComponent } from './components/bits/bits.component';
import { TapComponent } from './components/tap/tap.component';
import { WineComponent } from './components/wine/wine.component';
import { ShotsComponent } from './components/shots/shots.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    SpecialtiesComponent,
    BytesComponent,
    BitsComponent,
    TapComponent,
    WineComponent,
    ShotsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
