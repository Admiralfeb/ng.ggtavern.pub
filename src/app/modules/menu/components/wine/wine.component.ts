import { Component, OnInit } from '@angular/core';
import menu from 'assets/menuoptions.json';

@Component({
  selector: 'wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
  wines = menu.wines;

  constructor() { }

  ngOnInit() {
  }

}
