import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestoComponent } from './manifesto.component';
import { SharedModule } from '@shared/shared.module';

describe('ManifestoComponent', () => {
  let component: ManifestoComponent;
  let fixture: ComponentFixture<ManifestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManifestoComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
