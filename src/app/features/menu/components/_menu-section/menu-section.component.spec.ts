import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionComponent } from './menu-section.component';
import { BottledComponent } from '../bottled/bottled.component';
import { DrinkComponent } from '../drinks/drinks.component';
import { FoodItemwFriesComponent } from '../foodItemwfries/foodItemwfries.component';
import { LiquorsComponent } from '../liquors/liquors.component';
import { MiscFoodItemComponent } from '../miscfooditem/miscfooditem.component';
import { TapComponent } from '../tap/tap.component';
import { WineComponent } from '../wine/wine.component';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorNotFoundComponent } from '@shared/components';
import { MenuService } from '../../services/menu.service';

describe('MenuSectionComponent', () => {
  let component: MenuSectionComponent;
  let fixture: ComponentFixture<MenuSectionComponent>;

  const mockService = jasmine.createSpyObj<MenuService>(['getMenuSections', 'getMenuSection', 'sortItems', 'isMenuLoaded']);
  mockService.isMenuLoaded.and.returnValue(Promise.resolve(true));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuSectionComponent,
        BottledComponent,
        DrinkComponent,
        FoodItemwFriesComponent,
        LiquorsComponent,
        MiscFoodItemComponent,
        TapComponent,
        WineComponent,
      ],
      imports: [SharedModule,
        RouterTestingModule.withRoutes([{ path: '404', component: ErrorNotFoundComponent }]),
      ],
      providers: [
        { provide: MenuService, useValue: mockService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
