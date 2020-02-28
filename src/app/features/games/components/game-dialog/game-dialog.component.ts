import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameDialogData } from './dialog.model';

@Component({
  selector: 'game-dialog',
  templateUrl: './game-dialog.component.html',
  styleUrls: ['./game-dialog.component.scss']
})
export class GameDialogComponent {
  value: string;
  constructor(
    public dialogRef: MatDialogRef<GameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDialogData) {
    this.value = data.value;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
