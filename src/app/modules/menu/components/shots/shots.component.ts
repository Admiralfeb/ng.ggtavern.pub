import { Component, OnInit } from '@angular/core';
import { ShotsItem } from '../../models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent extends BaseMenuComponent implements OnInit {
  items: ShotsItem[] = [];
  itemType = 'shots';
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
