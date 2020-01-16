import { Component, OnInit, Input } from '@angular/core';
import { BottleItem } from '../../models';

@Component({
  selector: 'menu-bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent implements OnInit {
  @Input() items: BottleItem[];

  constructor() { }

  ngOnInit() { }

}
