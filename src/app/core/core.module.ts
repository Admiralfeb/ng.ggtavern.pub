import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from '@shared/ensureModuleLoadedOnce.guard';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
