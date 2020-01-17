import { Injectable } from '@angular/core';
import { Position, Worker } from '../about.models';
import { DatabaseService } from '@core/services/database.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SortService } from '@core/services/sort.service';

@Injectable()
export class AboutService {

  constructor(private db: DatabaseService, private sort: SortService, private sanitizer: DomSanitizer) { }

  async getPositions(): Promise<Position[]> {
    const pathString = `positions`;
    let items: Position[] = [];
    try {
      items = await this.db.getItems<Position>(pathString);
      items = this.sort.sortItems(items, 'order');
      const fullItems = items.map(position => {
        if (position.workers) {
          position.workers = this.sort.sortItems(position.workers, 'name');
          position.workers = position.workers.map(worker => {
            if (worker.imgPath) {
              worker.imgUrl = this.getImageUrl(worker.imgPath);
            } else {
              worker.imgUrl = this.getImageUrl('assets/img/android-chrome-512x512.png');
            }
            return worker;
          });
        }
        return position;
      });
      return fullItems;
    } catch (err) {
      throw err;
    }
  }

  private getImageUrl(urlString: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(urlString);
  }
}
