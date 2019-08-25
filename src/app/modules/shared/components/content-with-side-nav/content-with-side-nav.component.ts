import { MediaMatcher } from '@angular/cdk/layout';
import { Component, Input, ChangeDetectorRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { NavigationModel } from '../../models/navigationModel';
import { SelectControlValueAccessor } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'content-with-side-nav',
  templateUrl: './content-with-side-nav.component.html',
  styleUrls: ['./content-with-side-nav.component.scss']
})
export class ContentwithSideNavComponent implements OnInit {
  @Input() navheaderText = 'Navigation';
  @Input() navItems: NavigationModel = null;
  @Input() headerText = '';
  @ViewChild('snav', { static: true }) sidenav: MatSidenav;
  burgerTip = 'Show/Hide the Navigation Pane';

  innerWidth = 0;
  minWidth = 768;

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > this.minWidth) {
      this.sidenav.open();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  navClick() {
    if (this.innerWidth < this.minWidth) {
      this.sidenav.close();
    }
  }
}
