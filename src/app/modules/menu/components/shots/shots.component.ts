import { Component, OnInit } from '@angular/core';
import menu from 'assets/menuoptions.json';

@Component({
  selector: 'shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  wines = menu.shots;
  constructor() { }

  ngOnInit() {
  }

}
