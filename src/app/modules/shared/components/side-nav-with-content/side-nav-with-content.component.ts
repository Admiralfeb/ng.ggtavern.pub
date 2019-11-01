import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NavigationModel } from '@shared/models';

@Component({
  selector: 'side-nav-with-content',
  templateUrl: './side-nav-with-content.component.html',
  styleUrls: ['./side-nav-with-content.component.scss']
})
export class SideNavWithContentComponent implements OnInit {
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
