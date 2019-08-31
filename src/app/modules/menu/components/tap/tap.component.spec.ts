import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapComponent } from './tap.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TapComponent', () => {
  let component: TapComponent;
  let fixture: ComponentFixture<TapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TapComponent],
      imports: [SharedModule, BrowserAnimationsModule]

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
