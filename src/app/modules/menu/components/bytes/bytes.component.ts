import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BytesItem } from '../../models';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-bytes',
  templateUrl: './bytes.component.html',
  styleUrls: ['./bytes.component.scss']
})
export class BytesComponent extends BaseMenuComponent implements OnInit {
  items: BytesItem[] = [];
  itemType = 'bytes';

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
