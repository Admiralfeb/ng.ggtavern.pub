import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '@shared/navigation.model';

@Component({
  selector: 'about-component',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class AboutComponent implements OnInit {
  title = 'About Us';
  navItems: NavigationModel[] = [
    { text: 'Manifesto', link: 'manifesto' },
    { text: 'Memberships', link: 'memberships' },
    { text: 'Staff', link: 'staff' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
