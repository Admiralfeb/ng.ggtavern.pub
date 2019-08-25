import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Grinning Goblin Gaming Tavern';
  offerings = [
    { id: 'item0', text: 'Retro Video Games' },
    { id: 'item1', text: 'Card Games' },
    { id: 'item2', text: 'Food' },
    { id: 'item3', text: 'Board Games' },
    { id: 'item4', text: 'Beer' },
    { id: 'item5', text: 'Virtual Reality' },
    { id: 'item6', text: 'Liquor' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
