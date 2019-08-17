import { MediaMatcher } from '@angular/cdk/layout';
import { Component, Input, ChangeDetectorRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationModel } from '../../models/navigationModel';
import { SelectControlValueAccessor } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'content-with-side-nav',
  templateUrl: './content-with-side-nav.component.html',
  styleUrls: ['./content-with-side-nav.component.scss']
})
export class ContentwithSideNavComponent implements OnDestroy, OnInit {
  @Input() navheaderText = 'Navigation';
  @Input() navItems: NavigationModel = null;
  @Input() headerText = '';
  @ViewChild('snav', { static: true }) sidenav: MatSidenav;
  mobileQuery: MediaQueryList;
  burgerTip = 'Show/Hide the Navigation Pane';

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if (this.mobileQuery.matches === false) {
      console.log('nav should open');
      this.sidenav.open();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navClick() {
    if (this.mobileQuery.matches === true) {
      this.sidenav.close();
    }
  }
}
