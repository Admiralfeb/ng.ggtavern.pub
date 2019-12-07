import { Injectable } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage, private sanitizer: DomSanitizer) { }

  async getImageURL(path: string): Promise<SafeUrl> {
    const storageRef = this.storage.storage.ref(path);
    let url: string;
    try {
      url = await storageRef.getDownloadURL();
    } catch (error) {
      console.error(error.code);
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    }

    if (url) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }
  }
}
