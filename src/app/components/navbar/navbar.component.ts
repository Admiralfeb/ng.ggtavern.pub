import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleNavMenu() {
    const navbar = document.getElementById('app-navbar');
    if (navbar.className === 'navbar') {
      navbar.className += ' responsive';
    } else {
      navbar.className = 'navbar';
    }
  }

  hideNavMenu() {
    const navbar = document.getElementById('app-navbar');
    navbar.className = 'navbar';

  }
}
