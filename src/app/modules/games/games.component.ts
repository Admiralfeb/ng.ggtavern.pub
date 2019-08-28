import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/models/navigationModel';
import gameoptions from 'assets/gameoptions.json';
import { GameSystem, Game } from './models/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'games',
  template:
    `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class GamesComponent implements OnInit {
  title = 'GG Game Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' }
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle();
    this.loadSystems();
  }

  private setTitle() {
    this.titleService.setTitle(this.title);
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
