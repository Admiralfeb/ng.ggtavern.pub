import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { DialogService } from '@core/services/dialog.service';
import { MenuItem } from '../models';

@Component({
  template: ''
})
export class BaseMenuComponent {

  constructor(public menuService: MenuService, public dialog: DialogService) { }

  async getMenuItems<T extends MenuItem>(path: string): Promise<T[]> {
    try {
      return await this.menuService.getMenuItems<T>(path);
    } catch (error) {
      console.error(error);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    }
  }
}
