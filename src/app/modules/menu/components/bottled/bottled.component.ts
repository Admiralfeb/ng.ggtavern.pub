import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BottleItem } from '../../menu.models';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent implements OnInit {
  bottles: BottleItem[] = [];
  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems<BottleItem>('bottles').then(value => {
      this.bottles = value
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
