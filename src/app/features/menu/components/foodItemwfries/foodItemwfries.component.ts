import { Component, OnInit, Input } from '@angular/core';
import { FoodItemwFries } from '../../models';

/**
 * Meals at Goblin
 */
@Component({
  selector: 'menu-foodItemwfries',
  templateUrl: './foodItemwfries.component.html',
  styleUrls: ['./foodItemwfries.component.scss']
})
export class FoodItemwFriesComponent {
  @Input() items: FoodItemwFries[];
}
