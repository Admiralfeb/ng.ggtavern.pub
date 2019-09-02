import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSignComponent } from './open-sign.component';
import { SharedModule } from '@shared/shared-module.module';

describe('OpenSignComponent', () => {
  let component: OpenSignComponent;
  let fixture: ComponentFixture<OpenSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenSignComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
