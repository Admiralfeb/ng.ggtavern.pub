import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { Position } from '../../about.models';

@Component({
  selector: 'about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent implements OnInit {
  positions: Position[] = [];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getPositions();
  }

  async getPositions() {
    this.positions = await this.aboutService.getPositions();
  }

}
