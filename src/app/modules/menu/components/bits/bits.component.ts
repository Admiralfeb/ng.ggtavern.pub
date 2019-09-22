import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MiscFoodItem } from '../../menu.models';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent implements OnInit {
  bits: MiscFoodItem[] = [];

  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems('bits').then(value => {
      this.bits = value as MiscFoodItem[];
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
