import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapComponent } from './tap.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';

describe('TapComponent', () => {
  let component: TapComponent;
  let fixture: ComponentFixture<TapComponent>;

  beforeEach(async(() => {
    const menuServiceStub = jasmine.createSpyObj('MenuService', ['getMenuItems']);
    menuServiceStub.getMenuItems.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      declarations: [TapComponent],
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
    fixture = TestBed.createComponent(TapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
