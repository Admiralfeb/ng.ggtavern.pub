import { Component, OnInit } from '@angular/core';
import { ShotsItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  shots: ShotsItem[] = [];
  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems('shots').then(value => {
      this.shots = value as ShotsItem[];
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
