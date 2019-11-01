import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './material/material.module';

import {
  CountdownComponent,
  ErrorNotFoundComponent,
  UnderConstructionComponent,
  MessageDialogComponent,
  ContentwithSideNavComponent,
  VideoYoutubeComponent
} from './components';
import { SideNavWithContentComponent } from './components/side-nav-with-content/side-nav-with-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    CountdownComponent,
    ErrorNotFoundComponent,
    UnderConstructionComponent,
    MessageDialogComponent,
    ContentwithSideNavComponent,
    VideoYoutubeComponent,
    SideNavWithContentComponent,
  ],
  entryComponents: [
    MessageDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    CountdownComponent,
    ErrorNotFoundComponent,
    UnderConstructionComponent,
    ContentwithSideNavComponent,
    SideNavWithContentComponent,
    VideoYoutubeComponent,
  ]
})
export class SharedModule { }
