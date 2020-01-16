import { Component, OnInit, Input } from '@angular/core';
import { FoodItemwFries } from '../../models';


@Component({
  selector: 'menu-foodItemwfries',
  templateUrl: './foodItemwfries.component.html',
  styleUrls: ['./foodItemwfries.component.scss']
})
export class FoodItemwFriesComponent implements OnInit {
  @Input() items: FoodItemwFries[];

  constructor() { }

  ngOnInit() { }

}
