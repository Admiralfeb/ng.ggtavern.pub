import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { SharedModule } from '@shared/shared-module.module';



@NgModule({
  declarations: [
    AboutComponent,
    AboutMainComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
