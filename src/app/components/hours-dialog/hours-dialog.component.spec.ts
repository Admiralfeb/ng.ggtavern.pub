import { Component, NgModule } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { By } from '@angular/platform-browser';

import { SharedModule } from '@shared/shared-module.module';

import { HoursDialogComponent } from './hours-dialog.component';

// Noop component is only a workaround to trigger change detection
@Component({})
class NoopComponent { }

const TEST_DIRECTIVES = [
  HoursDialogComponent,
  NoopComponent
];

@NgModule({
  imports: [MatDialogModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    HoursDialogComponent
  ],
})
class DialogTestModule { }

describe('HoursDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogTestModule],
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    });

    noop = TestBed.createComponent(NoopComponent);
    dialog = TestBed.get(MatDialog);
  });
});
