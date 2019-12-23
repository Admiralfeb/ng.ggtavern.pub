import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMainComponent } from './contact.component';
import { SharedModule } from '@shared/shared.module';

describe('ContactComponent', () => {
  let component: ContactMainComponent;
  let fixture: ComponentFixture<ContactMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMainComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
