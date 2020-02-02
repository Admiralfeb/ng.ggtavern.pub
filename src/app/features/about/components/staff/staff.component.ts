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

  /** runs on initialization */
  ngOnInit() {
    this.getPositions().then(positions => this.positions = positions);
  }

  /**
   * Get positions from the About Service
   */
  async getPositions(): Promise<Position[]> {
    return await this.aboutService.getPositions();
  }

}
