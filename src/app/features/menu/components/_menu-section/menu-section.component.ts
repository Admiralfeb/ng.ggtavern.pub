import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Observer } from 'rxjs';
import { MenuSection } from '../../models/menu-section.model';

@Component({
  selector: 'menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {
  note = '';
  items = [];
  type = '';
  constructor(private route: ActivatedRoute, private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.isMenuLoaded().then(_ => {
      const locationobserver: Observer<Params> = {
        next: x => this.onLocationChange(x),
        error: err => console.error('error reading router params'),
        complete: () => console.log('complete')
      };
      this.route.params.subscribe(locationobserver);
    });
  }

  async onLocationChange(params: Params) {
    const section: MenuSection = this.menuService.getMenuSection(params.id);
    if (section) {
      this.type = section.type;
      if (section.items != null) {
        this.items = section.items;
      } else {
        this.note = 'No menu items listed';
      }
    } else {
      this.router.navigate(['404']);
    }
  }

}
