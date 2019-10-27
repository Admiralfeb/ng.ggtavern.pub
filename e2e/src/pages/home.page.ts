import { browser, by, element } from 'protractor';

export class HomePage {
  getPage() {
    return browser.get('/home');
  }

  getPageTitle() {
    return browser.getTitle();
  }
}
