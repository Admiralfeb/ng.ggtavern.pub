import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineComponent } from './wine.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';

describe('WineComponent', () => {
  let component: WineComponent;
  let fixture: ComponentFixture<WineComponent>;

  beforeEach(async(() => {
    const menuServiceStub = jasmine.createSpyObj('MenuService', ['getMenuItems']);
    menuServiceStub.getMenuItems.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      declarations: [WineComponent],
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
    fixture = TestBed.createComponent(WineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
