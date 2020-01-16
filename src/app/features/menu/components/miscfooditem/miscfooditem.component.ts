import { Component, OnInit, Input } from '@angular/core';
import { MiscFoodItem } from '../../models';

@Component({
  selector: 'menu-miscfooditem',
  templateUrl: './miscfooditem.component.html',
  styleUrls: ['./miscfooditem.component.scss']
})
export class MiscFoodItemComponent implements OnInit {
  @Input() items: MiscFoodItem[];

  constructor() { }

  ngOnInit() { }

}
