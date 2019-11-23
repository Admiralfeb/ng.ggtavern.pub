import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BytesItem } from '../../menu.models';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-bytes',
  templateUrl: './bytes.component.html',
  styleUrls: ['./bytes.component.scss']
})
export class BytesComponent implements OnInit {
  bytes: BytesItem[] = [];

  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems<BytesItem>('bytes').then(value => {
      this.bytes = value
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
