import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionsComponent } from './game-options.component';
import { SharedModule } from '@shared/shared-module.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '@test/activated-route-stub';

describe('GameOptionsComponent', () => {
  let component: GameOptionsComponent;
  let fixture: ComponentFixture<GameOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameOptionsComponent],
      imports: [SharedModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
