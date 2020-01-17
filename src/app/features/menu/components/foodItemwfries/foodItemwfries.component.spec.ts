import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemwFriesComponent } from './foodItemwfries.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';

describe('BytesComponent', () => {
  let component: FoodItemwFriesComponent;
  let fixture: ComponentFixture<FoodItemwFriesComponent>;

  beforeEach(async(() => {
    const menuServiceStub = jasmine.createSpyObj('MenuService', ['getMenuItems']);
    menuServiceStub.getMenuItems.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      declarations: [FoodItemwFriesComponent],
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
    fixture = TestBed.createComponent(FoodItemwFriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
