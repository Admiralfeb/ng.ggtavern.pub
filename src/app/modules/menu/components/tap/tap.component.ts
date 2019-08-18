import { Component, OnInit } from '@angular/core';
import menu from 'src/assets/menuoptions.json';

@Component({
  selector: 'tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  taps = menu.tap;
  constructor() { }

  ngOnInit() {
  }

}
