import { Component, OnInit } from '@angular/core';
import { WineItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menu-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
  wines: WineItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.wines = this.menuService.getMenuItems('wines') as WineItem[];
  }

}
