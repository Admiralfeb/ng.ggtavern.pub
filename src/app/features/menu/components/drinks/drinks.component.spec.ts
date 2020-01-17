import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkComponent } from './drinks.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';

describe('MenuComponent', () => {
  let component: DrinkComponent;
  let fixture: ComponentFixture<DrinkComponent>;

  beforeEach(async(() => {
    const menuServiceStub = jasmine.createSpyObj('MenuService', ['getMenuItems']);
    menuServiceStub.getMenuItems.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      declarations: [DrinkComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MenuService, useValue: menuServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
