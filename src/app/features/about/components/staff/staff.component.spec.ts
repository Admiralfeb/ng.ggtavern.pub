import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffComponent } from './staff.component';
import { SharedModule } from '@shared/shared.module';
import { AboutService } from '../../services/about.service';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;

  beforeEach(async(() => {
    const aboutServiceStub = jasmine.createSpyObj<AboutService>('AboutService', ['getPositions']);

    TestBed.configureTestingModule({
      declarations: [StaffComponent],
      imports: [SharedModule],
      providers: [
        { provide: AboutService, useValue: aboutServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
