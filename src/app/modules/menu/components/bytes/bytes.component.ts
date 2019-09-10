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
    this.bytes = this.menuService.getMenuItems('bytes') as BytesItem[];
  }

}
