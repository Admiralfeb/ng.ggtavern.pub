import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

import { MessageDialogComponent } from './message-dialog.component';
import { MessageDialogData, MessageType } from './message-dialog.model';

import { setupDialogTestModule } from '@test/dialog-test-setup.function';
import { NoopComponent } from '@test/noop.component';

const TEST_DIRECTIVES = [
  MessageDialogComponent,
  NoopComponent
];

fdescribe('MessageDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;

  const matDialogRefSpy = jasmine.createSpyObj<MatDialogRef<MessageDialogComponent>>(['close']);


  beforeEach(() => {
    setupDialogTestModule(TEST_DIRECTIVES, [MessageDialogComponent]);

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

  });

  const testData = [
    { test: 'error', title: 'error does not compute', message: 'you made an error', type: MessageType.error },
    { test: 'warning', title: 'warning will robinson', message: 'warn me if you gonna do that', type: MessageType.warning },
    { test: 'information', title: 'You love info', message: 'info is cool', type: MessageType.information }
  ];
  const messageIconsMap = [
    { type: MessageType.error, icon: 'error_outline', class: 'error' },
    { type: MessageType.warning, icon: 'warning', class: 'warning' },
    { type: MessageType.information, icon: '', class: 'information' }
  ];

  testData.forEach(testInfo => {
    it(`should show a ${testInfo.test} dialog`, () => {
      const dialogInfo: MessageDialogData = { title: testInfo.title, message: testInfo.message, type: testInfo.type };
      const config: MatDialogConfig = {
        data: dialogInfo
      };
      dialog.open(MessageDialogComponent, config);
      noop.detectChanges();

      const title = overlayContainerElement.querySelector('h2[mat-dialog-title]');
      const iconDiv = overlayContainerElement.querySelector(`i[class="material-icons icon"]`);
      const mapping = messageIconsMap.find(x => x.type === testInfo.type).icon;
      const message = overlayContainerElement.querySelector('div[class="message"]');

      expect(title.textContent).toBe(testInfo.title);
      if (testInfo.test === 'information') {
        expect(iconDiv).toBeFalsy('information dialogs should not have an icon');
      } else {
        expect(iconDiv).toBeTruthy('dialog should have an icon');
        expect(iconDiv.textContent).toBe(mapping);
      }
      expect(message.textContent).toBe(testInfo.message);
    });

  });
});
