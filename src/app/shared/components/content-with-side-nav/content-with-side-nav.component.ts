import { Component, Input, OnInit, HostListener, ViewChild, OnDestroy } from '@angular/core';
import { NavigationModel } from '../../navigation.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'content-with-side-nav',
  templateUrl: './content-with-side-nav.component.html',
  styleUrls: ['./content-with-side-nav.component.scss']
})
export class ContentwithSideNavComponent implements OnInit, OnDestroy {
  @Input() navheaderText = 'Navigation';
  @Input() navItems: NavigationModel = null;
  @Input() headerText = '';
  // @ViewChild('contentScroll', { static: true }) contentScroll;
  burgerTip = 'Show the menu';
  innerWidth = 0;
  minWidth = 768;
  mobile = false;

  constructor(private title: Title) { }

  ngOnInit() {
    this.mobile = this.checkforMobileSize();
  }
  ngOnDestroy(): void {
    this.title.setTitle('Grinning Goblin Gaming Tavern');
  }

  @HostListener('window:resize')
  onResize() {
    this.mobile = this.checkforMobileSize();
  }

  checkforMobileSize(): boolean {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > this.minWidth) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Close side-nav (if mobile) and scroll to the top of the content
   */
  changeContent() {
    if (this.mobile) {
      this.closeNav();
    }
    // this.contentScroll.scrollTo({ top: 0, duration: 500 });
  }

  /**
   * Open the side-nav when in mobile.
   */
  openNav() {
    document.getElementById('contentsNav').style.width = '100%';
  }

  /**
   * Close the side-nav when in mobile.
   */
  closeNav() {
    document.getElementById('contentsNav').style.width = '0%';
  }
}
