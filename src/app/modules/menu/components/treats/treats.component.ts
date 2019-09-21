import { Component, OnInit } from '@angular/core';
import { MiscFoodItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.scss']
})
export class TreatsComponent implements OnInit {
  treats: MiscFoodItem[] = [];

  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems('treats').then(value => {
      this.treats = value as MiscFoodItem[];
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
