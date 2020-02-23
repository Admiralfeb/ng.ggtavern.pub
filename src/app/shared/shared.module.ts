import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import {
  ErrorNotFoundComponent,
  MessageDialogComponent,
  ContentwithSideNavComponent,
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
    MessageDialogComponent,
    ContentwithSideNavComponent,
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
    ContentwithSideNavComponent,
  ]
})
export class SharedModule { }
