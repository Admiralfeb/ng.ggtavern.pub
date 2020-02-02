import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/navigation.model';

/**
 * Routes the different About components
 */
@Component({
  selector: 'about-component',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class AboutComponent {
  title = 'About Us';
  navItems: NavigationModel[] = [
    { text: 'Manifesto', link: 'manifesto' },
    { text: 'Memberships', link: 'memberships' },
    { text: 'Staff', link: 'staff' },
  ];
}
