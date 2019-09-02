import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'hours-dialog',
  templateUrl: './hours-dialog.component.html',
  styleUrls: ['./hours-dialog.component.scss']
})
export class HoursDialogComponent {
  title = 'Grinning Goblin Tavern Hours';
  message = 'Look for Facebook updates or a banner on this site for exceptions to these hours.';
  hours: DialogData[];

  constructor(
    public dialogRef: MatDialogRef<HoursDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: DialogData[]) {
    this.hours = this.loadHours(dialogData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loadHours(data: DialogData[]): DialogData[] {
    let newData: DialogData[] = [];
    for (const hour of data) {
      const newname = hour.name;
      const newopen = this.tConvert(hour.open);
      const newclose = this.tConvert(hour.close);
      const item: DialogData = { name: newname, open: newopen, close: newclose };
      newData = [...newData, item];
    }
    return newData;
  }

  private tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
}

interface DialogData {
  name: string;
  open: string;
  close: string;
}
