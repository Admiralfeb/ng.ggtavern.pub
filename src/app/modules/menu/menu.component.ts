import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/models/navigationModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'menu-main',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class MenuComponent implements OnInit {
  title = 'Grinning Goblin Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' },
    { text: 'Specialty Drinks', link: 'specialties' },
    { text: 'Drinks on Tap', link: 'tap' },
    { text: 'Bottled Drinks', link: 'bottled' },
    { text: 'Shots', link: 'shots' },
    { text: 'Wines', link: 'wine' },
    { text: 'Bits', link: 'bits' },
    { text: 'Bytes', link: 'bytes' },
    { text: 'Treats', link: 'treats' },
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle();
  }

  private setTitle() {
    this.titleService.setTitle(this.title);
  }


}
