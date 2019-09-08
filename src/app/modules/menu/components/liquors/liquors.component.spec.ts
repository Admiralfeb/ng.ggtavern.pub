import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsComponent } from './liquors.component';
import { SharedModule } from '@shared/shared-module.module';

describe('LiquorsComponent', () => {
  let component: LiquorsComponent;
  let fixture: ComponentFixture<LiquorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiquorsComponent],
      imports: [SharedModule]
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
