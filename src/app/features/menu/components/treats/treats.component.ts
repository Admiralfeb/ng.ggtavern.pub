import { Component, OnInit } from '@angular/core';
import { MiscFoodItem } from '../../models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.scss']
})
export class TreatsComponent extends BaseMenuComponent implements OnInit {
  items: MiscFoodItem[] = [];
  itemType = 'treats';

  constructor(public menuService: MenuService, public dialog: DialogService) {
    super(menuService, dialog);
  }

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    this.items = await this.getMenuItems(this.itemType);
  }

}
