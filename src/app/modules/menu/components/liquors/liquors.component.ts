import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MenuService } from '../../services/menu.service';
import { LiquorItem } from '../../menu.models';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.scss']
})
export class LiquorsComponent implements OnInit {
  liquors: LiquorItem[] = [];
  sortSelect = 'name';
  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems<LiquorItem>('liquors').then(value => {
      this.liquors = value;
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

  onSortChange(event: MatRadioChange) {
    const newValue = event.value as string;
    this.sortLiquors(newValue);
  }

  private sortLiquors(sort: string) {
    switch (sort) {
      case 'name':
        this.sortSelect = 'name';
        this.liquors = this.menuService.sortItems(this.liquors, 'name');
        break;
      case 'alcohol':
        this.sortSelect = 'type';
        this.liquors = this.menuService.sortItems(this.liquors, 'type');
        break;
      default:
        break;
    }
  }
}
