import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { SpecialtyItem } from '../../menu.models';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'menu-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {
  specialties: SpecialtyItem[] = [];

  constructor(private menuService: MenuService, private dialog: DialogService) { }

  ngOnInit() {
    this.menuService.getMenuItems('specialties').then(value => {
      this.specialties = value as SpecialtyItem[];
    }).catch(err => {
      console.error(err);
      const errMessage = 'There was an error retrieving the items from the database';
      this.dialog.showError(errMessage);
    });
  }

}
