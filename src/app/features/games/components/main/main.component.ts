import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  rules = [
    'Playing games, unless otherwise stated, is free.',
    'VR costs $10/hour. $1/hr on Sundays',
    'You can bring your own games or systems.',
    `We ask you not to bring Xbox One or Playstation 4 games as they require installation on the system.`,
    'We have 3 Wii U systems, but only one of each of the others.',
    'Please do NOT move systems between the TVs.',
    'The bartender will hold onto your ID during use of a Tavern game.',
    'The lists are not extensive as they are subject to frequent change.',
    'Feel free to donate games to the Tavern!'
  ];

}
