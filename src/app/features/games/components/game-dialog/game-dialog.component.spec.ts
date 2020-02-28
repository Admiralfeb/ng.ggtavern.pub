import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDialogComponent } from './game-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopComponent } from '@test/noop.component';
import { setupDialogTestModule } from '@test/dialog-test-setup.function';
import { OverlayContainer } from '@angular/cdk/overlay';

const TEST_DIRECTIVES = [
  GameDialogComponent,
  NoopComponent
];
describe('GameDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;

  const matDialogRefSpy = jasmine.createSpyObj<MatDialogRef<GameDialogComponent>>(['close']);


  beforeEach(() => {
    setupDialogTestModule(TEST_DIRECTIVES, [GameDialogComponent]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });

    noop = TestBed.createComponent(NoopComponent);
    dialog = TestBed.inject(MatDialog);

  });

  it('should create', () => {
    expect(dialog).toBeTruthy();
  });
});
