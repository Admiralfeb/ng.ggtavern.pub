import { Component, Input } from '@angular/core';
import { WineItem } from '../../models';

/**
 * Wine items
 */
@Component({
  selector: 'menu-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent {
  @Input() items: WineItem[];

}
