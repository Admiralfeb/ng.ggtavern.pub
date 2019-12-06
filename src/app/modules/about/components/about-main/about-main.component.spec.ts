import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMainComponent } from './about-main.component';
import { SharedModule } from '@shared/shared-module.module';
import { AboutService } from '../../services/about.service';

describe('AboutMainComponent', () => {
  let component: AboutMainComponent;
  let fixture: ComponentFixture<AboutMainComponent>;

  beforeEach(async(() => {
    const aboutServiceStub = jasmine.createSpyObj<AboutService>('AboutService', ['getPositions']);

    TestBed.configureTestingModule({
      declarations: [AboutMainComponent],
      imports: [SharedModule],
      providers: [
        { provide: AboutService, useValue: aboutServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
