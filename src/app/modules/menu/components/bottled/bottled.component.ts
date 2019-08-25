import { Component, OnInit } from '@angular/core';
import menu from 'assets/menuoptions.json';

@Component({
  selector: 'bottled',
  templateUrl: './bottled.component.html',
  styleUrls: ['./bottled.component.scss']
})
export class BottledComponent implements OnInit {
  bottles = menu.bottles;
  constructor() { }

  ngOnInit() {
  }

}
