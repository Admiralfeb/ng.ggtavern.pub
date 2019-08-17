import { Component, OnInit } from '@angular/core';
import menu from 'src/assets/menuoptions.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  specialties = menu.specialties;

  constructor() { }

  ngOnInit() {
  }

}
