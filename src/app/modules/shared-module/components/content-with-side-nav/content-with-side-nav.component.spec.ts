import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentwithSideNavComponent } from './content-with-side-nav.component';
import { MaterialModule } from '../../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('ContentwithSideNavComponent', () => {
  let component: ContentwithSideNavComponent;
  let fixture: ComponentFixture<ContentwithSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [ ContentwithSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentwithSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
