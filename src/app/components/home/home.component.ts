import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Grinning Goblin Gaming Tavern';
  offerings = [
    { id: 'item0', text: 'Retro Video Games', link: '/games/arcade' },
    { id: 'item1', text: 'Card Games', link: '/games/board' },
    { id: 'item2', text: 'Food', link: '/menu/bytes' },
    { id: 'item3', text: 'Board Games', link: '/games/board' },
    { id: 'item4', text: 'Beer', link: '/menu/bottled' },
    { id: 'item5', text: 'Virtual Reality', link: '/games/vr' },
    { id: 'item6', text: 'Liquor', link: '/menu/specialties' }
  ];
  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.setTitle();
  }

  /**
   * Sets the webpage title.
   */
  private setTitle() {
    this.titleService.setTitle(this.title);
  }

  /**
   * Triggers a navigation to the link aligned to the button in offerings object
   * @param id id of the button clicked
   */
  navClick(id: string): void {
    const link = this.offerings.find(x => x.id === id).link;
    this.router.navigate([link]);
  }
}
