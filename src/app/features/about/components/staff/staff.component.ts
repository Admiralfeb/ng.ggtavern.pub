import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { Position } from '../../about.models';

@Component({
  selector: 'about-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  positions: Position[] = [];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getPositions();
  }

  async getPositions() {
    this.positions = await this.aboutService.getPositions();
  }

}
