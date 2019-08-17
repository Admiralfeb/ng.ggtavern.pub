import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions} from 'ngx-markdown';

import { MaterialModule } from './material/material.module';

import { CountdownComponent } from './components/countdown/countdown.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';
import { ContentwithSideNavComponent } from './components/content-with-side-nav/content-with-side-nav.component';

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
  ]
})
export class SharedModule { }
