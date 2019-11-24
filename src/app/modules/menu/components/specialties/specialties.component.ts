import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { SpecialtyItem } from '../../models';
import { DialogService } from '@core/services/dialog.service';
import { BaseMenuComponent } from '../base.component';

@Component({
  selector: 'menu-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent extends BaseMenuComponent implements OnInit {
  items: SpecialtyItem[] = [];
  itemType = 'specialties';
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
