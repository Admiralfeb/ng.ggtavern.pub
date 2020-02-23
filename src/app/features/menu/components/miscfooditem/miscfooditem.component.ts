import { Component, OnInit, Input } from '@angular/core';
import { MiscFoodItem } from '../../models';

/** Displays Misc Food items */
@Component({
  selector: 'menu-miscfooditem',
  templateUrl: './miscfooditem.component.html',
  styleUrls: ['./miscfooditem.component.scss']
})
export class MiscFoodItemComponent {
  /** Items to display */
  @Input() items: MiscFoodItem[];
}
