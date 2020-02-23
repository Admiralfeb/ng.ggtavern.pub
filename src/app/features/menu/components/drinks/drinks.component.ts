import { Component, OnInit, Input } from '@angular/core';
import { DrinkItem } from '../../models';

/** Display Drink items */
@Component({
  selector: 'menu-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinkComponent {
  /** Items to display */
  @Input() items: DrinkItem[];

}
