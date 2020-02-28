import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageDialogComponent, MessageDialogData, MessageType } from '@shared/components';
import { ComponentType } from '@angular/cdk/portal';

/**
 * This service creates and displays dialogs.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  /**
   * Generates and shows an error dialog.
   * @param message Text to display in error dialog
   */
  showError(message: string): void {
    const dialogData: MessageDialogData = { message, type: MessageType.error };
    this.dialog.open(MessageDialogComponent, { data: dialogData });
  }

  /**
   * Generates and shows an warning dialog.
   * @param message Text to display in warning dialog
   */
  showWarning(message: string): void {
    const dialogData: MessageDialogData = { message, type: MessageType.warning };
    this.dialog.open(MessageDialogComponent, { data: dialogData });
  }

  /**
   * Generates and shows an informational dialog.
   * @param message Text to display in informational dialog
   */
  showInformation(message: string): void {
    const dialogData: MessageDialogData = { message, type: MessageType.information };
    this.dialog.open(MessageDialogComponent, { data: dialogData });
  }

  /**
   * Generates and shows a custom dialog that does not return any information.
   * @param component Component to use within the dialog
   * @param customOptions Custom options to pass to the dialog generation
   */
  showCustomInfoDialog(component: ComponentType<unknown> | TemplateRef<unknown>, customOptions: MatDialogConfig): void {
    this.dialog.open(component, customOptions);
  }
}
