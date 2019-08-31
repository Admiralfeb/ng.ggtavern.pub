import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BytesComponent } from './bytes.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BytesComponent', () => {
  let component: BytesComponent;
  let fixture: ComponentFixture<BytesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BytesComponent],
      imports: [SharedModule, BrowserAnimationsModule]

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
