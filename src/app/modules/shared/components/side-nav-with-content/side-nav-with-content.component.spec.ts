import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWithContentComponent } from './side-nav-with-content.component';
import { MaterialModule } from '@shared/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SideNavWithContentComponent', () => {
  let component: SideNavWithContentComponent;
  let fixture: ComponentFixture<SideNavWithContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [SideNavWithContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
