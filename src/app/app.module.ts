import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared-module.module';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpenSignComponent } from './components/open-sign/open-sign.component';
import { HoursDialogComponent } from './components/hours-dialog/hours-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OpenSignComponent,
    HoursDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  entryComponents: [HoursDialogComponent]
})
export class AppModule { }
