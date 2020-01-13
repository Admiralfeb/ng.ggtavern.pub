import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import {
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    ErrorNotFoundComponent,
    UnderConstructionComponent,
    ContentwithSideNavComponent,
    VideoYoutubeComponent,
  ]
})
export class SharedModule { }
