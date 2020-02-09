import { by, browser, element } from 'protractor';
import { GenericPage } from './pages';

describe('Home Page', () => {
  const page = new GenericPage();

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await page.getPage('/home');
  });

  it('should have the correct title', async () => {
    const title = await page.getPageTitle();
    expect(title).toEqual(`Grinning Goblin Gaming Tavern`);
  });

  it('/ should redirect to /home', async () => {
    await browser.get('/');
    const currentURL = await browser.getCurrentUrl();
    expect(currentURL).toEqual('http://localhost:4200/home');
  });
});

describe('Food and Drink', () => {
  const page = new GenericPage();

  beforeAll(async () => {
    browser.waitForAngular();
    await page.getPage('/menu');
  });

  it('should have the title "GG Food Menu"', async () => {
    const title = await page.getPageTitle();
    expect(title).toEqual('GG Food Menu');
  });

  it('/menu should redirect to /menu/home', async () => {
    await browser.get('/menu');
    const currentURL = await browser.getCurrentUrl();
    expect(currentURL).toEqual('http://localhost:4200/menu/home');
  });
});

describe('Games', () => {
  const page = new GenericPage();

  beforeAll(async () => {
    browser.waitForAngular();
    await page.getPage('/games');
  });

  it('should have the title "GG Game Menu"', async () => {
    const title = await page.getPageTitle();
    expect(title).toEqual('GG Game Menu');
  });

  it('/games should redirect to /games/home', async () => {
    await browser.get('/games');
    const currentURL = await browser.getCurrentUrl();
    expect(currentURL).toEqual('http://localhost:4200/games/home');
  });
});

describe('contact', () => {
  const page = new GenericPage();

  beforeAll(async () => {
    browser.waitForAngular();
    await page.getPage('/contact');
  });

  it('should have the title "Grinning Goblin Gaming Tavern"', async () => {
    const title = await page.getPageTitle();
    expect(title).toEqual('Grinning Goblin Gaming Tavern');
  });

  it('/contact should redirect to /contact/home', async () => {
    await browser.get('/contact');
    const currentURL = await browser.getCurrentUrl();
    expect(currentURL).toEqual('http://localhost:4200/contact/home');
  });
});

describe('about', () => {
  const page = new GenericPage();

  beforeAll(async () => {
    browser.waitForAngular();
    await page.getPage('/about');
  });

  it('should have the title "Grinning Goblin Gaming Tavern"', async () => {
    const title = await page.getPageTitle();
    expect(title).toEqual('Grinning Goblin Gaming Tavern');
  });

  it('/about should redirect to /about/staff', async () => {
    await browser.get('/about');
    const currentURL = await browser.getCurrentUrl();
    expect(currentURL).toEqual('http://localhost:4200/about/staff');
  });
});
