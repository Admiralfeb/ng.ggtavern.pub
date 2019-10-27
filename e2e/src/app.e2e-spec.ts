import { by, browser, element } from 'protractor';
import { GenericPage } from './pages';

describe('Home Page', () => {
  const homePage = new GenericPage();

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await homePage.getPage('/home');
  });

  it('should have the correct title', async () => {
    const title = await homePage.getPageTitle();
    expect(title).toEqual(`Grinning Goblin Gaming Tavern`);
  });
});
