import { by, browser, element } from 'protractor';
import { GenericPage } from './pages';

describe('Navigation tests', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  describe('Redirects', () => {

    it('/ should redirect to /home', async () => {
      await browser.get('/');
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual('http://localhost:4200/home');
    });
  });
});
