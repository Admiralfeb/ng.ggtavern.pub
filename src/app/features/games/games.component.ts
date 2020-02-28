import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationModel } from '@shared/navigation.model';
import { GameSystem } from './models/model';
import { Title } from '@angular/platform-browser';
import { GamesService } from './services/games.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'games',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class GamesComponent implements OnInit, OnDestroy {
  title = 'GG Game Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' }
  ];
  private systemSubscription: Subscription;
  private systemObserver = {
    next: (x: GameSystem[]) => this.loadSystems(x),
    error: (err: any) => console.error(err)
  };
  constructor(private titleService: Title, private dataService: GamesService) { }

  ngOnInit() {
    this.setTitle();
    this.systemSubscription = this.dataService.getSystems().subscribe(this.systemObserver);
  }

  ngOnDestroy(): void {
    this.systemSubscription.unsubscribe();
  }

  private setTitle() {
    this.titleService.setTitle(this.title);
  }

  private loadSystems(systems: GameSystem[]) {
    console.log('systems:', systems);
    this.navItems = this.navItems.slice(0, 1);
    for (const element of systems) {
      const short = element.short;
      const system = element.system;
      this.navItems = [...this.navItems, { text: system, link: short }];
    }
    // Call a resize so CSS will reevaluate and reposition everything correctly.
    window.dispatchEvent(new Event('resize'));
  }
}
