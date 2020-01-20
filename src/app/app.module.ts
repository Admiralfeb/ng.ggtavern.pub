import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { CountdownModule } from '@bit/admiralfeb.ng-common-components.countdown';

import { HomeComponent } from './components/home/home.component';
import { OpenSignComponent } from './components/open-sign/open-sign.component';
import { HoursDialogComponent } from './components/hours-dialog/hours-dialog.component';


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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, null),
    CoreModule,
    SharedModule,
    CountdownModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  entryComponents: [HoursDialogComponent]
})
export class AppModule { }
