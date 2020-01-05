import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestoComponent } from './manifesto.component';

describe('ManifestoComponent', () => {
  let component: ManifestoComponent;
  let fixture: ComponentFixture<ManifestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestoComponent ]
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
