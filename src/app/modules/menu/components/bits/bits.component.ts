import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MiscFoodItem } from '../../menu.models';

@Component({
  selector: 'menu-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent implements OnInit {
  bits: MiscFoodItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('bits').then(value => {
      this.bits = value as MiscFoodItem[];
    });
  }

}
