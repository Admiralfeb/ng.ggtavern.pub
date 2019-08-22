import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../shared-module/models/navigationModel';
import gameoptions from 'src/assets/gameoptions.json';
import { GameSystem } from './models/model';

@Component({
  selector: 'games',
  template:
    `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class GamesComponent implements OnInit {
  title = 'Grinning Goblin Game Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' }
  ];
  constructor() { }

  ngOnInit() {
    this.loadSystems();
  }

  private loadSystems() {
    const systems = gameoptions;

  }
}
