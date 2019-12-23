import { Component, OnInit } from '@angular/core';
import { TapItem } from '../../models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent extends BaseMenuComponent implements OnInit {
  items: TapItem[] = [];
  itemType = 'taps';

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
