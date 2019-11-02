import { Component, Input, OnInit, HostListener } from '@angular/core';
import { NavigationModel } from '../../models/navigationModel';

@Component({
  selector: 'content-with-side-nav',
  templateUrl: './content-with-side-nav.component.html',
  styleUrls: ['./content-with-side-nav.component.scss']
})
export class ContentwithSideNavComponent implements OnInit {
  @Input() navheaderText = 'Navigation';
  @Input() navItems: NavigationModel = null;
  @Input() headerText = '';
  innerWidth = 0;
  minWidth = 768;
  mobile = false;

  constructor() { }

  ngOnInit() {
    this.mobile = this.checkforMobileSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.mobile = this.checkforMobileSize();
  }

  checkforMobileSize(): boolean {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > this.minWidth) {
      return true;
    } else {
      return false;
    }
  }
}
