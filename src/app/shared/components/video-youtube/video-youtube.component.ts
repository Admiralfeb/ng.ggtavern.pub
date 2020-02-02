import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Component that displays a youtube video.
 */
@Component({
  selector: 'video-youtube',
  templateUrl: './video-youtube.component.html',
  styleUrls: ['./video-youtube.component.scss']
})
export class VideoYoutubeComponent implements OnInit {
  @Input() src: string;
  videoURL: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  /** runs on initialization */
  ngOnInit() {
    this.videoURL = this.sanitizer.sanitize(SecurityContext.URL, this.src);
  }
}
