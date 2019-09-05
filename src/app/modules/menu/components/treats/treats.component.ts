import { Component, OnInit } from '@angular/core';
import menu from 'assets/menuoptions.json';

@Component({
  selector: 'menu-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.scss']
})
export class TreatsComponent implements OnInit {
  treats = menu.treats;

  constructor() { }

  ngOnInit() {
  }

}
