import { browser } from 'protractor';

export class GenericPage {
  /**
   * Returns the page defined at the path provided
   * @param path path/to/page
   */
  getPage(path: string) {
    return browser.get(path);
  }

  /**
   * Returns the title of the current page
   */
  getPageTitle() {
    return browser.getTitle();
  }
}
