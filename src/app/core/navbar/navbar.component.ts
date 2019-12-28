import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '@core/services/announcement.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private announcements: AnnouncementService) { }

  ngOnInit() {
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
}
