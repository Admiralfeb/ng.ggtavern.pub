import { Component, OnInit } from '@angular/core';
import { ShotsItem } from '../../menu.models';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'menu-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  shots: ShotsItem[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('shots').then(value => {
      this.shots = value as ShotsItem[];
    });
  }

}
