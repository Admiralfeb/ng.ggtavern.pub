import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../shared-module/models/navigationModel';

@Component({
  selector: 'menu-main',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class MenuComponent implements OnInit {
  title = 'Grinning Goblin Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'main' },
    { text: 'Specialty Drinks', link: 'specialties' },
    { text: 'Drinks on Tap', link: 'tap' },
    { text: 'Bottled Drinks', link: 'bottled' },
    { text: 'Shots', link: 'shots' },
    { text: 'Wines', link: 'wine' },
    { text: 'Bits', link: 'bits' },
    { text: 'Bytes', link: 'bytes' },
  ];
  constructor() { }

  ngOnInit() {
  }



}
