import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BytesComponent } from './bytes.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';

describe('BytesComponent', () => {
  let component: BytesComponent;
  let fixture: ComponentFixture<BytesComponent>;

  beforeEach(async(() => {
    const menuServiceStub = jasmine.createSpyObj('MenuService', ['getMenuItems']);
    menuServiceStub.getMenuItems.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      declarations: [BytesComponent],
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
    fixture = TestBed.createComponent(BytesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
