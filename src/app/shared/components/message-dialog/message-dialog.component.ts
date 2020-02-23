import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogData, MessageType } from './message-dialog.model';

/** Dialog Component */
@Component({
  selector: 'message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {
  /** title for component */
  title: string;
  /** message for component */
  message: string;
  /** type of message. affects visual elements */
  type: MessageType;
  /** icon to display */
  icon: string;
  /** class of component */
  class: string;
  /** mapping for type to icon and class */
  private messageIconsMap = [
    { type: MessageType.error, icon: 'error_outline', class: 'error' },
    { type: MessageType.warning, icon: 'warning', class: 'warning' },
    { type: MessageType.information, icon: '', class: 'information' }
  ];

  /** build the dialog */
  constructor(
    /** Reference to the dialog */
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: MessageDialogData) {

    this.title = dialogData.title;
    this.message = dialogData.message;
    this.type = dialogData.type;

    const mapping = this.messageIconsMap.find(x => x.type === this.type);
    this.icon = mapping.icon;
    this.class = mapping.class;
  }
}
