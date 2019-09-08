import { Component, OnInit } from '@angular/core';
import menu from 'assets/menuoptions.json';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.scss']
})
export class LiquorsComponent implements OnInit {
  items = menu.liquors;
  sortSelect = 'name';
  constructor() { }

  ngOnInit() {
  }

  onSortChange(event: MatRadioChange) {
    const newValue = event.value as string;

    switch (newValue) {
      case 'name':
        this.sortSelect = 'name';
        this.items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alcohol':
        this.sortSelect = 'type';
        this.items.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }
  }
}
