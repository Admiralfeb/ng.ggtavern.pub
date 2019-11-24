import { Component, OnInit } from '@angular/core';
import { WineItem } from '../../models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent extends BaseMenuComponent implements OnInit {
  items: WineItem[] = [];
  itemType = 'wines';

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
