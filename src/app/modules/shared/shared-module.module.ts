import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './material.module';

import {
  CountdownComponent,
  ErrorNotFoundComponent,
  UnderConstructionComponent,
  MessageDialogComponent,
  ContentwithSideNavComponent,
  VideoYoutubeComponent
} from './components';

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
    VideoYoutubeComponent,
  ]
})
export class SharedModule { }
