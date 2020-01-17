import { Component, OnInit, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MenuService } from '../../services/menu.service';
import { LiquorItem } from '../../models';


@Component({
  selector: 'menu-liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.scss']
})
export class LiquorsComponent implements OnInit {
  @Input() items: LiquorItem[];
  sortSelect = 'type';

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.sortLiquors(this.sortSelect);
  }

  onSortChange(event: MatRadioChange) {
    const newValue = event.value as string;
    this.sortLiquors(newValue);
  }

  private sortLiquors(sort: string) {
    switch (sort) {
      case 'name':
        this.sortSelect = 'name';
        this.items = this.menuService.sortItems(this.items, 'name');
        break;
      case 'type':
        this.sortSelect = 'type';
        this.items = this.menuService.sortItems(this.items, 'type');
        break;
      default:
        break;
    }
  }
}
