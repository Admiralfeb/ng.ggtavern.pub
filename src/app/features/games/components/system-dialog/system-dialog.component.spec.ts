import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDialogComponent } from './system-dialog.component';

describe('SystemDialogComponent', () => {
  let component: SystemDialogComponent;
  let fixture: ComponentFixture<SystemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
