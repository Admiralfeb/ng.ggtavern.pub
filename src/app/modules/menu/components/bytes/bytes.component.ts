import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BytesItem } from '../../menu.models';

@Component({
  selector: 'menu-bytes',
  templateUrl: './bytes.component.html',
  styleUrls: ['./bytes.component.scss']
})
export class BytesComponent implements OnInit {
  bytes: BytesItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('bytes').then(value => {
      this.bytes = value as BytesItem[];
    });
  }

}
