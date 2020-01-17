import { Component, OnInit, Input } from '@angular/core';
import { WineItem } from '../../models';

@Component({
  selector: 'menu-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
  @Input() items: WineItem[];

  constructor() { }

  ngOnInit() { }

}
