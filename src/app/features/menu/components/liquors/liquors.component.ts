import { Component, OnInit, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MenuService } from '../../services/menu.service';
import { LiquorItem } from '../../models';

/** Displays Liquor Items */
@Component({
  selector: 'menu-liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.scss']
})
export class LiquorsComponent implements OnInit {
  /** Items to display */
  @Input() items: LiquorItem[];
  /** sort. Defaults to type */
  sortSelect = 'type';

  constructor(
    /** menu service reference */
    private menuService: MenuService) { }

  /** initialize component */
  ngOnInit() {
    this.sortLiquors(this.sortSelect);
  }

  /** sort change event. Resorts based upon the event value. */
  onSortChange(event: MatRadioChange) {
    const newValue = event.value as string;
    this.sortLiquors(newValue);
  }

  /** sorts the liquors */
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
