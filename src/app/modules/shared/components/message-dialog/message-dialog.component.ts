import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MessageDialogData {
  title?: string;
  message: string;
  type: MessageType;
}

export enum MessageType {
  error,
  warning,
  information,
}

@Component({
  selector: 'message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {
  title: string;
  message: string;
  type: MessageType;
  icon: string;
  class: string;
  private messageIconsMap = [
    { type: MessageType.error, icon: 'error_outline', class: 'error' },
    { type: MessageType.warning, icon: 'warning', class: 'warning' },
    { type: MessageType.information, icon: '', class: '' }
  ];

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: MessageDialogData) {

    this.title = dialogData.title;
    this.message = dialogData.message;
    this.type = dialogData.type;

    const mapping = this.messageIconsMap.find(x => x.type === this.type);
    this.icon = mapping.icon;
    this.class = mapping.class;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
