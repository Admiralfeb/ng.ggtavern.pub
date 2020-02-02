import { Component, OnInit, Input } from '@angular/core';
import { BottleItem } from '../../models';

/**
 * Bottled and canned items
 */
@Component({
  selector: 'menu-bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent {
  @Input() items: BottleItem[];
}
