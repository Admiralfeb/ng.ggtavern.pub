import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MenuService } from '../../services/menu.service';
import { LiquorItem } from '../../models';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.scss']
})
export class LiquorsComponent extends BaseMenuComponent implements OnInit {
  items: LiquorItem[] = [];
  itemType = 'liquors';
  sortSelect = 'type';
  constructor(public menuService: MenuService, public dialog: DialogService) {
    super(menuService, dialog);
  }

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    this.items = await this.getMenuItems(this.itemType);
    this.sortLiquors(this.sortSelect);
  }

  onSortChange(event: MatRadioChange) {
    const newValue = event.value as string;
    this.sortLiquors(newValue);
  }

  private sortLiquors(sort: string) {
    switch (sort) {
      case 'name':
        this.sortSelect = 'name';
        this.items = this.menuService.sortItems(this.items, 'name');
        break;
      case 'type':
        this.sortSelect = 'type';
        this.items = this.menuService.sortItems(this.items, 'type');
        break;
      default:
        break;
    }
  }
}
