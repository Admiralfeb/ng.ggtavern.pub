import { Injectable } from '@angular/core';
import { Stitch, StitchAppClient } from 'mongodb-stitch-browser-sdk';


@Injectable({
  providedIn: 'root'
})
export class StitchService {
  private stitchClient: StitchAppClient;
  constructor() {
    this.stitchClient = Stitch.initializeDefaultAppClient('ggtavern-jxiyk');
  }

  get client() {
    return this.stitchClient;
  }
}
