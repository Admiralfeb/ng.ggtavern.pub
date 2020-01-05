import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SharedModule } from '@shared/shared.module';
import { AnnouncementService } from '@core/services/announcement.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  const announcementServiceSpy = jasmine.createSpyObj<AnnouncementService>(['displayBannerAnnouncement']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [SharedModule],
      providers: [
        { provide: AnnouncementService, useValue: announcementServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggleNavMenu class', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navbar = compiled.querySelector('#app-navbar') as HTMLElement;

    expect(navbar.className).toBe('navbar');
    component.toggleNavMenu();
    fixture.detectChanges();

    expect(navbar.className).toBe('navbar responsive');

    component.toggleNavMenu();
    fixture.detectChanges();
    expect(navbar.className).toBe('navbar');
  });


  it('should apply navbar class when hideNavMenu is called', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navbar = compiled.querySelector('#app-navbar') as HTMLElement;
    navbar.className = 'somethingelse';
    fixture.detectChanges();
    expect(navbar.className).toBe('somethingelse');
    component.hideNavMenu();
    fixture.detectChanges();
    expect(navbar.className).toBe('navbar');
  });

});
