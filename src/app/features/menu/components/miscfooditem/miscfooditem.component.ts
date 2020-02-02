import { Component, OnInit, Input } from '@angular/core';
import { MiscFoodItem } from '../../models';

/**
 * Nibbles and Bits food items at Goblin
 */
@Component({
  selector: 'menu-miscfooditem',
  templateUrl: './miscfooditem.component.html',
  styleUrls: ['./miscfooditem.component.scss']
})
export class MiscFoodItemComponent {
  @Input() items: MiscFoodItem[];
}
