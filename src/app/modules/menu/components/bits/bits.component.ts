import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MiscFoodItem } from '../../models';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent extends BaseMenuComponent implements OnInit {
  items: MiscFoodItem[] = [];
  itemType = 'bits';

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
