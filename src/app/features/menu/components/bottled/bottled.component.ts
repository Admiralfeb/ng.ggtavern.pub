import { Component, OnInit, Input } from '@angular/core';
import { BottleItem } from '../../models';

/** Displays Bottled items */
@Component({
  selector: 'menu-bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent {
  /** Items to display */
  @Input() items: BottleItem[];
}
