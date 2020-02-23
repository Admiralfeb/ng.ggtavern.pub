import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/navigation.model';
import { Title } from '@angular/platform-browser';
import { MenuSection } from './models/menu-section.model';
import { MenuService } from './services/menu.service';

/** Menu landing. Displays its content in Content with sidenav */
@Component({
  selector: 'menu-main',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class MenuComponent implements OnInit {
  /** title to display for the page */
  title = 'GG Food Menu';
  /** nav items */
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' }
  ];
  constructor(
    /** reference to title service */
    private titleService: Title,
    /** reference to the menu service */
    private menuService: MenuService) { }

  ngOnInit() {
    this.setTitle();
    this.menuService.getMenuSections().then(sections => {
      this.loadMenu(sections);
    });
  }

  /** set the title */
  private setTitle() {
    this.titleService.setTitle(this.title);
  }

  /** loads the menu sections */
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
