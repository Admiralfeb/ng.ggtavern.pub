import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { SharedModule } from '@shared/shared.module';
import { AboutService } from './services/about.service';



@NgModule({
  declarations: [
    AboutComponent,
    AboutMainComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  providers: [AboutService]
})
export class AboutModule { }
