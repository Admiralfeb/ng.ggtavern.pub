import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from '@shared/ensureModuleLoadedOnce.guard';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [NavbarComponent, LoginComponent],
  imports: [
    RouterModule,
    NgxAuthFirebaseUIModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
