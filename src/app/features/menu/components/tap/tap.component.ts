import { Component, OnInit, Input } from '@angular/core';
import { TapItem } from '../../models';

/**
 * Items on tap
 */
@Component({
  selector: 'menu-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  @Input() items: TapItem[];
}
