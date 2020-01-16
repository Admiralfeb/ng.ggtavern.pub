import { Component, OnInit, Input } from '@angular/core';
import { DrinkItem } from '../../models';

@Component({
  selector: 'menu-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinkComponent implements OnInit {
  @Input() items: DrinkItem[];

  constructor() { }

  ngOnInit() { }

}
