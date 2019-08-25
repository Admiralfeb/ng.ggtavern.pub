import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../shared-module/models/navigationModel';
import gameoptions from 'src/assets/gameoptions.json';
import { GameSystem, Game } from './models/model';

@Component({
  selector: 'games',
  template:
    `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class GamesComponent implements OnInit {
  title = 'Game Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' }
  ];
  constructor() { }

  ngOnInit() {
    this.loadSystems();
  }

  private loadSystems() {
    // let systems = JSON.parse(sessionStorage.getItem('game-menu')) as GameSystem[];
    // if (!systems) {
    const systems = gameoptions as GameSystem[];
    //   sessionStorage.setItem('game-menu', JSON.stringify(systems));
    // }
    console.log('systems:', systems);
    // systems = systems.sort();
    for (const element of systems) {
      const short = element.short;
      const system = element.system;
      this.navItems = [...this.navItems, { text: system, link: short }];
    }

  }
}
