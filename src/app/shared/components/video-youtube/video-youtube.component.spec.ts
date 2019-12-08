import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoYoutubeComponent } from './video-youtube.component';

describe('VideoYoutubeComponent', () => {
  let component: VideoYoutubeComponent;
  let fixture: ComponentFixture<VideoYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
