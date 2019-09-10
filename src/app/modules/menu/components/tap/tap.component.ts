import { Component, OnInit } from '@angular/core';
import { TapItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menu-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  taps: TapItem[] = []
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.taps = this.menuService.getMenuItems('taps') as TapItem[];
  }

}
