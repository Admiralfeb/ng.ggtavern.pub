import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { OpenSignComponent } from '../open-sign/open-sign.component';
import { SharedModule } from '@shared/shared.module';
import { CountdownModule } from '@bit/admiralfeb.ng-common-components.countdown';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const titleSpy = jasmine.createSpyObj<Title>('Title', ['setTitle']);
  const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

  const offerings = [
    { id: 'item0', text: 'Retro Video Games', link: '/games/arcade' },
    { id: 'item1', text: 'Card Games', link: '/games/board' },
    { id: 'item2', text: 'Food', link: '/menu/bytes' },
    { id: 'item3', text: 'Board Games', link: '/games/board' },
    { id: 'item4', text: 'Beer', link: '/menu/bottled' },
    { id: 'item5', text: 'Virtual Reality', link: '/games/vr' },
    { id: 'item6', text: 'Liquor', link: '/menu/specialties' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        OpenSignComponent
      ],
      imports: [RouterTestingModule, SharedModule, CountdownModule],
      providers: [
        { provide: Title, useValue: titleSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the page title', () => {
    expect(titleSpy.setTitle).toHaveBeenCalledWith('Grinning Goblin Gaming Tavern');
  });

  describe('Visual Aspects', () => {
    it(`should have as title 'Grinning Goblin Gaming Tavern'`, () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Grinning Goblin Gaming Tavern');
    });

    it('should render title in a h1 tag', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Grinning Goblin Gaming Tavern');
    });

    offerings.forEach(offering => {
      it(`should have '${offering.text}' on button #${offering.id}`, () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector(`#${offering.id}`).textContent).toContain(offering.text);
      });
    });
  });

  describe('Nav Buttons', () => {
    offerings.forEach(offering => {
      it(`should navigate to ${offering.link} from '${offering.text}' button`, () => {
        component.navClick(offering.id);
        const spy = routerSpy.navigate as jasmine.Spy;
        const navArgs = spy.calls.mostRecent().args[0];
        console.log(navArgs);
        expect(navArgs).toEqual([offering.link]);
      });
    });
  });

});
