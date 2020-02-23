import { Component, OnInit, Input } from '@angular/core';
import { TapItem } from '../../models';

/** Displays items on tap */
@Component({
  selector: 'menu-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  /** Items to display */
  @Input() items: TapItem[];
}
