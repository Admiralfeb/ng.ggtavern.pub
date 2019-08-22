import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../shared-module/models/navigationModel';
import games from 'src/assets/gameoptions.json';

@Component({
  selector: 'games',
  template:
    `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`
})
export class GamesComponent implements OnInit {
  title = 'Grinning Goblin Game Menu';
  navItems: NavigationModel[] = [
    { text: 'Menu Home', link: 'home' },
    { text: 'Atari', link: 'atari' },
    { text: 'Arcade', link: 'arcade' },
    { text: 'Board Games', link: 'board' },
    { text: 'GameCube', link: 'gamecube' },
    { text: 'Nintendo', link: 'nintendo' },
    { text: 'Super Nintendo', link: 'snes' },
    { text: 'Nintendo 64', link: 'n64' },
    { text: 'Playstation', link: 'ps1' },
    { text: 'Playstation 2', link: 'ps2' },
    { text: 'Playstation 3', link: 'ps3' },
    { text: 'Playstation 4', link: 'ps4' },
    { text: 'Virtual Reality', link: 'vr' },
    { text: 'Wii', link: 'wii' },
    { text: 'Wii U', link: 'wiiu' },
    { text: 'Xbox', link: 'xb' },
    { text: 'Xbox 360', link: 'xb360' },
    { text: 'Xbox One', link: 'xb1' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
