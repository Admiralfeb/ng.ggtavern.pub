import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Announcement } from '@core/announcement.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from './dialog.service';
import moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private hasBannerBeenDisplayed = false;
  private announcements: Announcement[];
  constructor(private db: DatabaseService, private snackbar: MatSnackBar, private dialog: DialogService) {
    this.getAnnouncements().then(x => this.announcements = x).catch(e => {
      this.dialog.showError('There was an error getting the announcements');
      console.error(e);
    });
  }

  private async getAnnouncements() {
    if (this.announcements) {
      return this.announcements;
    } else {
      try {
        const ments = await this.db.getItemswithID<Announcement>('announcement');
        this.announcements = ments.map(x => {
          x.expiryDate = moment(x.expiry);
          return x;
        });

        this.hasBannerBeenDisplayed = false;
        return this.announcements;
      } catch (err) {
        throw err;
      }
    }
  }

  /**
   * Used only by NavBar! This function displays the banner announcement from the database.
   */
  async displayBannerAnnouncement() {
    if (this.hasBannerBeenDisplayed) {
      return;
    }
    await this.getAnnouncements();
    const ments = this.announcements.filter(x => x.id === 'banner');
    if (ments.length > 0) {
      const expiry = ments[0].expiryDate;
      const now = moment();
      const isExpired = expiry.isBefore(now);
      if (!isExpired) {
        this.hasBannerBeenDisplayed = true;
        const config = new MatSnackBarConfig();
        config.verticalPosition = 'top';
        config.horizontalPosition = 'right';
        config.panelClass = ['background-primary'];
        this.snackbar.open(ments[0].message, ments[0].action, config);
      }
    }
  }
}
