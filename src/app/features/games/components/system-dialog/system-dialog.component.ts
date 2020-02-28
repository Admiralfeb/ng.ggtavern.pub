import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameSystemDialogData } from './dialog.model';

@Component({
  selector: 'system-dialog',
  templateUrl: './system-dialog.component.html',
  styleUrls: ['./system-dialog.component.scss']
})
export class SystemDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SystemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameSystemDialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
