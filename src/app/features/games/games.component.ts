import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/navigation.model';
import { GameSystem } from './games.models';
import { Title } from '@angular/platform-browser';
import { GamesService } from './services/games.service';

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
  constructor(private titleService: Title, private dataService: GamesService) { }

  ngOnInit() {
    this.setTitle();
    this.dataService.getSystems().then(systems => {
      this.loadSystems(systems);
    });
  }

  private setTitle() {
    this.titleService.setTitle(this.title);
  }

  private loadSystems(systems: GameSystem[]) {
    console.log('systems:', systems);
    // systems = systems.sort();
    for (const element of systems) {
      const short = element.short;
      const system = element.system;
      this.navItems = [...this.navItems, { text: system, link: short }];
    }
    // Call a resize so CSS will reevaluate and reposition everything correctly.
    window.dispatchEvent(new Event('resize'));
  }
}
