import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BottleItem } from '../../models';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent extends BaseMenuComponent implements OnInit {
  items: BottleItem[] = [];
  itemType = 'bottles';

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
