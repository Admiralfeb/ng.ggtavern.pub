import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BottleItem } from '../../menu.models';

@Component({
  selector: 'menu-bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent implements OnInit {
  bottles: BottleItem[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('bottles').then(value => {
      this.bottles = value as BottleItem[];
    });
  }

}
