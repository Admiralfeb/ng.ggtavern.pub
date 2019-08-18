import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BytesComponent } from './bytes.component';

describe('FoodComponent', () => {
  let component: BytesComponent;
  let fixture: ComponentFixture<BytesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BytesComponent]
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
