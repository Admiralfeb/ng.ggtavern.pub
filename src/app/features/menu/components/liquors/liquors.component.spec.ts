import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsComponent } from './liquors.component';
import { SharedModule } from '@shared/shared.module';
import { MenuService } from '../../services/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LiquorsComponent', () => {
  let component: LiquorsComponent;
  let fixture: ComponentFixture<LiquorsComponent>;

  beforeEach(async(() => {
    const menuServiceStub = jasmine.createSpyObj('MenuService', ['getMenuItems']);
    menuServiceStub.getMenuItems.and.returnValue(Promise.resolve());

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
