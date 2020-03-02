import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import bugsnag from '@bugsnag/js';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { OpenSignComponent } from './components/open-sign/open-sign.component';
import { HoursDialogComponent } from './components/hours-dialog/hours-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

const bugsnagClient = bugsnag('b7991037e1418ed7b82b09a7b8e2d218');

// create a factory which will return the bugsnag error handler
export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenSignComponent,
    HoursDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    Title,
    { provide: ErrorHandler, useFactory: errorHandlerFactory }
  ],
  bootstrap: [AppComponent],
  entryComponents: [HoursDialogComponent]
})
export class AppModule { }
