import { Component, OnInit } from '@angular/core';
import menu from 'src/assets/menuoptions.json';

@Component({
  selector: 'menu-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {
  specialties = menu.specialties;

  constructor() { }

  ngOnInit() {
  }

}
