import { Component, OnInit } from '@angular/core';
import menu from 'src/assets/menuoptions.json';

@Component({
  selector: 'bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent implements OnInit {
  bits = menu.bits;

  constructor() { }

  ngOnInit() {
  }

}
