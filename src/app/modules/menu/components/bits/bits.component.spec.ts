import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsComponent } from './bits.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BitsComponent', () => {
  let component: BitsComponent;
  let fixture: ComponentFixture<BitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BitsComponent],
      imports: [SharedModule, BrowserAnimationsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
