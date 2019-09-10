import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottledComponent } from './bottled.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';

describe('BottledComponent', () => {
  let component: BottledComponent;
  let fixture: ComponentFixture<BottledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottledComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [MenuService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
