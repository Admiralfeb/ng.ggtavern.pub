import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Announcement } from '@core/announcement.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from './dialog.service';
import moment from 'moment-timezone';

/**
 * This service controls the notification banners.
 */
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  /** if true, won't display the main banner again this session */
  private hasBannerBeenDisplayed = false;
  /** available announcements */
  private announcements: Announcement[];
  /** snackbar config for all notifications */
  private config: MatSnackBarConfig = {
    verticalPosition: 'top',
    horizontalPosition: 'right',
    panelClass: ['background-primary']
  };


  constructor(private db: DatabaseService, private snackbar: MatSnackBar) {
    this.getAnnouncements().then(x => this.announcements = x).catch(e => {
      this.snackbar.open('There was an error getting the announcements', 'ok');
      console.error(e);
    });
  }

  /**
   * Gets the announcements from the database
   */
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
        this.snackbar.open(ments[0].message, ments[0].action, this.config);
      }
    }
  }

  /**
   * Displays a temporary notification
   * @param message message string to display
   * @param duration duration to display message. Default is 5000 (5 seconds)
   * @param action action text to display on button. Default is 'OK'
   */
  displayTempMessage(message: string, duration?: number, action?: string) {
    if (!duration) {
      duration = 5000;
    }
    if (!action) {
      action = 'OK';
    }
    const config = Object.assign({}, this.config);
    config.duration = duration;
    this.snackbar.open(message, action, config);
  }
}
