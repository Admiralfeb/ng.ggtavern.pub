import { NgModule } from '@angular/core';
import { StaffComponent } from './components/staff/staff.component';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { SharedModule } from '@shared/shared.module';
import { AboutService } from './services/about.service';
import { MembershipComponent } from './components/membership/membership.component';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { UnderConstructionModule } from '@admiralfeb/under-construction';



@NgModule({
  declarations: [
    AboutComponent,
    StaffComponent,
    MembershipComponent,
    ManifestoComponent],
  imports: [
    AboutRoutingModule,
    SharedModule,
    UnderConstructionModule,
  ],
  providers: [AboutService]
})
export class AboutModule { }
