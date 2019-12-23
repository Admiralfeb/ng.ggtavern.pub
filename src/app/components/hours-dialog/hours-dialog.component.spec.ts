import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

import { NoopComponent } from '@test/noop.component';

import { HoursDialogComponent } from './hours-dialog.component';
import { setupDialogTestModule } from '@test/dialog-test-setup.function';

const TEST_DIRECTIVES = [
  HoursDialogComponent,
  NoopComponent
];

describe('HoursDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;

  const matDialogRefSpy = jasmine.createSpyObj<MatDialogRef<HoursDialogComponent>>(['close']);

  const hours = [
    { day: 0, open: '17:00', close: '00:00', name: 'Sunday' },
    { day: 1, open: '', close: '', name: 'Monday' },
    { day: 2, open: '17:00', close: '00:00', name: 'Tuesday' },
    // { day: 3, open: '11:00', close: '13:00', name: 'Wednesday' },
    { day: 3, open: '17:00', close: '00:00', name: 'Wednesday' },
    { day: 4, open: '17:00', close: '00:00', name: 'Thursday' },
    { day: 5, open: '17:00', close: '02:00', name: 'Friday' },
    { day: 6, open: '17:00', close: '02:00', name: 'Saturday' },
  ];

  beforeEach(() => {
    // Sets up the initial dialog configurations to test
    setupDialogTestModule(TEST_DIRECTIVES, [HoursDialogComponent]);

    // Sets up the dialog-specific information that is needed
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
    dialog = TestBed.get(MatDialog);

    const config: MatDialogConfig = {
      width: '400px',
      data: hours
    };
    dialog.open(HoursDialogComponent, config);
    noop.detectChanges();
  });

  it('should have title of "Grinning Goblin Tavern Hours"', () => {
    const title = overlayContainerElement.querySelector('h2[mat-dialog-title]');
    expect(title.textContent).toBe('Grinning Goblin Tavern Hours');
  });

});
