import { Component, OnInit } from '@angular/core';
import { TapItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  taps: TapItem[] = [];
  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems('taps').then(value => {
      this.taps = value as TapItem[];
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
