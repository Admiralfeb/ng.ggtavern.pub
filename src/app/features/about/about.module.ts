import { NgModule } from '@angular/core';
import { StaffComponent } from './components/staff/staff.component';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { SharedModule } from '@shared/shared.module';
import { AboutService } from './services/about.service';



@NgModule({
  declarations: [
    AboutComponent,
    StaffComponent],
  imports: [
    AboutRoutingModule,
    SharedModule
  ],
  providers: [AboutService]
})
export class AboutModule { }
