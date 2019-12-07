import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ContactMainComponent } from './components/contact/contact.component';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

@NgModule({
  declarations: [
    ContactComponent,
    ContactMainComponent
  ],
  imports: [
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
