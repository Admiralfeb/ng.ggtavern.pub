import { Component, OnInit } from '@angular/core';
import { MiscFoodItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menu-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.scss']
})
export class TreatsComponent implements OnInit {
  treats: MiscFoodItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('treats').then(value => {
      this.treats = value as MiscFoodItem[];
    });
  }

}
