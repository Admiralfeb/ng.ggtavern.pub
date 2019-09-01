import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotsComponent } from './shots.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShotsComponent', () => {
  let component: ShotsComponent;
  let fixture: ComponentFixture<ShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShotsComponent],
      imports: [SharedModule, BrowserAnimationsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
