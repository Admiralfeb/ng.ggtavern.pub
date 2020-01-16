import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsComponent } from './liquors.component';
import { SharedModule } from '@shared/shared.module';
import { MenuService } from '../../services/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiquorItem } from '../../models';
import { MatRadioChange } from '@angular/material/radio';


describe('LiquorsComponent', () => {
  let component: LiquorsComponent;
  let fixture: ComponentFixture<LiquorsComponent>;
  const menuServiceStub = jasmine.createSpyObj<MenuService>(['getMenuItems', 'sortItems']);
  const menuItems: LiquorItem[] = [
    { name: 'Absente Absinthe', type: 'Liqueur', ABV: '55.00%' },
    { name: 'Barton Vodka', type: 'Vodka', ABV: '40.00%' }
  ];
  menuServiceStub.getMenuItems.and.returnValue(Promise.resolve(menuItems));

  beforeEach(async () => {

    TestBed.configureTestingModule({
      declarations: [LiquorsComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MenuService, useValue: menuServiceStub }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LiquorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to type for sorting', () => {
    const baseElement: HTMLElement = fixture.nativeElement;

    // Get the Radio Buttons
    const radioGroupValue = baseElement.querySelector('mat-radio-group').getAttribute('ng-reflect-value');

    // Get the Liquor Elements. Title only. No need to test ABV or Description
    const cardTitles: HTMLElement[] = [].slice.call(baseElement.querySelectorAll('mat-card-title'));
    const titleValues = cardTitles.map(title => {
      return title.innerText.toLowerCase();
    });

    // Assert
    expect(radioGroupValue).toBe('type');
    expect(cardTitles).toBeTruthy();
    titleValues.forEach(title => {
      menuItems.forEach(item => {
        if (title.startsWith(item.name.toLowerCase()) || title.endsWith(item.name.toLowerCase())) {
          // expect(title).toBe(`${item.name.toLowerCase()} - ${item.type.toLowerCase()}`);
          expect(title).toBe(`${item.type.toLowerCase()} - ${item.name.toLowerCase()}`);
        }
      });
    });
  });

  it('should update the sort', () => {
    const baseElement: HTMLElement = fixture.nativeElement;

    // radioButtons.forEach((button: HTMLInputElement) => {
    //   console.log(button.querySelector('input'));
    //   button.click();
    // });
    component.onSortChange(new MatRadioChange(null, 'name'));
    fixture.detectChanges();


    // Get the Radio Buttons
    const radioGroupValue = baseElement.querySelector('mat-radio-group').getAttribute('ng-reflect-value');

    // Get the Liquor Elements. Title only. No need to test ABV or Description
    const cardTitles: HTMLElement[] = [].slice.call(baseElement.querySelectorAll('mat-card-title'));
    const titleValues = cardTitles.map(title => {
      return title.innerText.toLowerCase();
    });

    // Assert
    expect(radioGroupValue).toBe('name');
    expect(cardTitles).toBeTruthy();
    titleValues.forEach(title => {
      menuItems.forEach(item => {
        if (title.startsWith(item.name.toLowerCase()) || title.endsWith(item.name.toLowerCase())) {
          expect(title).toBe(`${item.name.toLowerCase()} - ${item.type.toLowerCase()}`);
          // expect(title).toBe(`${item.type.toLowerCase()} - ${item.name.toLowerCase()}`);
        }
      });
    });
  });


});
