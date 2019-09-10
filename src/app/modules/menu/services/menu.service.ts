import { Injectable } from '@angular/core';
import menu from 'assets/menuoptions.json';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItems(itemType: string) {
    return menu[itemType];
  }
}
