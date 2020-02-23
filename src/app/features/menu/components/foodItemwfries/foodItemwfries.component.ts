import { Component, OnInit, Input } from '@angular/core';
import { FoodItemwFries } from '../../models';

/** Display meal-type food items */
@Component({
  selector: 'menu-foodItemwfries',
  templateUrl: './foodItemwfries.component.html',
  styleUrls: ['./foodItemwfries.component.scss']
})
export class FoodItemwFriesComponent {
  /** Items to display */
  @Input() items: FoodItemwFries[];
}
