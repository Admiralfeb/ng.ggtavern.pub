import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HoursData } from './hours-dialog.model';

/** Dialog that displays the hours */
@Component({
  selector: 'hours-dialog',
  templateUrl: './hours-dialog.component.html',
  styleUrls: ['./hours-dialog.component.scss']
})
export class HoursDialogComponent {
  /** title of the dialog */
  title = 'Grinning Goblin Tavern Hours';
  /** extra message to display */
  message = 'Look for Facebook updates or a banner on this site for exceptions to these hours.';
  /** Hours of Goblin */
  hours: HoursData[];

  constructor(
    /** Reference to this dialog */
    public dialogRef: MatDialogRef<HoursDialogComponent>,
    /** injected dialog data */
    @Inject(MAT_DIALOG_DATA) dialogData: HoursData[]) {
    this.hours = this.loadHours(dialogData);
  }

  /** Loads the hours from the data provided */
  loadHours(data: HoursData[]): HoursData[] {
    let newData: HoursData[] = [];
    for (const hour of data) {
      const newname = hour.day;
      const newopen = this.tConvert(hour.open);
      const newclose = this.tConvert(hour.close);
      const item: HoursData = { day: newname, open: newopen, close: newclose };
      newData = [...newData, item];
    }
    return newData;
  }

  /** Converts time to 12 hour format */
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
