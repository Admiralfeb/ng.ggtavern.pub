import { Injectable } from '@angular/core';
import { StitchService } from './stitch.service';
import { StitchAppClient, AnonymousCredential, UserPasswordAuthProviderClient, StitchUser } from 'mongodb-stitch-browser-sdk';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = null;
  private stitch: StitchAppClient;
  constructor(private stitchAPI: StitchService) {
    this.stitch = this.stitchAPI.client;
    this.loginAnon();
  }

  get IsLoggedInasUser() { return this.isLoggedIn; }

  async loginAnon() {
    const user = await this.stitch.auth.loginWithCredential(new AnonymousCredential());
    console.log(user);
  }

  login(user: string, password: string) {

  }

  async logout() {
    const user = this.getCurrentUser();
    if (user) {
      await this.stitch.auth.logoutUserWithId(user.id);
    }
    await this.loginAnon();
  }

  passwordReset(email: string) {
    const emailPassClient = this.stitch.auth
      .getProviderClient(UserPasswordAuthProviderClient.factory);

    emailPassClient.sendResetPasswordEmail(email).then(() => {
      console.log('Successfully sent password reset email!');
    }).catch(err => {
      console.error('Error sending password reset email:', err);
    });
  }

  private getCurrentUser(): StitchUser {
    return this.stitch.auth.isLoggedIn ? this.stitch.auth.user : null;
  }
}
