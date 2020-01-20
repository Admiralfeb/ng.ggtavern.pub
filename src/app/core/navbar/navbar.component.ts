import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '@core/services/announcement.service';
import { AuthService } from '@core/services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  constructor(private announcements: AnnouncementService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.init();
    this.auth.getLoginState().subscribe((value: boolean) => {
      this.isLoggedIn = value;
    });
    this.announcements.displayBannerAnnouncement();
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

  logout() {
    this.hideNavMenu();
    this.auth.logout();
  }
}
