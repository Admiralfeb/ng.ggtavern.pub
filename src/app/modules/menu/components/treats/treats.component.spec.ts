import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatsComponent } from './treats.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TreatsComponent', () => {
  let component: TreatsComponent;
  let fixture: ComponentFixture<TreatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreatsComponent],
      imports: [SharedModule, BrowserAnimationsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
