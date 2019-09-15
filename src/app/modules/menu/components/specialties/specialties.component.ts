import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { SpecialtyItem } from '../../menu.models';

@Component({
  selector: 'menu-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {
  specialties: SpecialtyItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems('specialties').then(value => {
      this.specialties = value as SpecialtyItem[];
    });
  }

}
