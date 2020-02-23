import { Component, OnInit, Input } from '@angular/core';
import { WineItem } from '../../models';

/** Displays Wine Items */
@Component({
  selector: 'menu-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent {
  /** Items to display */
  @Input() items: WineItem[];
}
