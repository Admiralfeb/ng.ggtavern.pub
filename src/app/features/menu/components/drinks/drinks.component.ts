import { Component, OnInit, Input } from '@angular/core';
import { DrinkItem } from '../../models';

/**
 * Specialties and Shots that GGTavern makes.
 */
@Component({
  selector: 'menu-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinkComponent {
  @Input() items: DrinkItem[];
}
