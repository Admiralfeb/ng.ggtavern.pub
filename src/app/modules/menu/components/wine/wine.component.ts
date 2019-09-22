import { Component, OnInit } from '@angular/core';
import { WineItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
  wines: WineItem[] = [];

  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems('wines').then(value => {
      this.wines = value as WineItem[];
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
