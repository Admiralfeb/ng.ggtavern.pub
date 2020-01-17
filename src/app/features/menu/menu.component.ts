import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/navigation.model';
import { Title } from '@angular/platform-browser';
import { MenuSection } from './models/menu-section.model';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'menu-main',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class MenuComponent implements OnInit {
  title = 'GG Food Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' }
  ];
  constructor(private titleService: Title, private menuService: MenuService) { }

  ngOnInit() {
    this.setTitle();
    this.menuService.getMenuSections().then(sections => {
      this.loadMenu(sections);
    });
  }

  private setTitle() {
    this.titleService.setTitle(this.title);
  }

  private loadMenu(menuSections: MenuSection[]) {
    console.log('menuSections:', menuSections);
    for (const element of menuSections) {
      const name = element.name;
      const section = element.section;
      this.navItems = [...this.navItems, { text: name, link: section }];
    }
    // Call a resize so CSS will reevaluate and reposition everything correctly.
    window.dispatchEvent(new Event('resize'));
  }
}
