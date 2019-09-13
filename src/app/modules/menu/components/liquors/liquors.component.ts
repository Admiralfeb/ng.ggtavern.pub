import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MenuService } from '../../services/menu.service';
import { LiquorItem } from '../../menu.models';

@Component({
  selector: 'liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.scss']
})
export class LiquorsComponent implements OnInit {
  liquors: LiquorItem[] = [];
  sortSelect = 'name';
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('liquors').then(value => {
      this.liquors = value as LiquorItem[];
    });
  }

  onSortChange(event: MatRadioChange) {
    const newValue = event.value as string;
    this.sortLiquors(newValue);
  }

  private sortLiquors(sort: string) {
    switch (sort) {
      case 'name':
        this.sortSelect = 'name';
        this.liquors = this.menuService.sortItems(this.liquors, this.sortSelect);
        break;
      case 'alcohol':
        this.sortSelect = 'type';
        this.liquors = this.menuService.sortItems(this.liquors, this.sortSelect);
        break;
      default:
        break;
    }
  }
}
