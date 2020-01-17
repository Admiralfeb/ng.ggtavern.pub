import { Component, OnInit, Input } from '@angular/core';
import { TapItem } from '../../models';

@Component({
  selector: 'menu-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  @Input() items: TapItem[];

  constructor() { }

  ngOnInit() { }

}
