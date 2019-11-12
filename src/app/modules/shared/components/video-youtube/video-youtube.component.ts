import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-youtube',
  templateUrl: './video-youtube.component.html',
  styleUrls: ['./video-youtube.component.scss']
})
export class VideoYoutubeComponent implements OnInit {
  @Input() src: string;
  videoURL: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoURL = this.getURL();
  }

  getURL(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }
}
