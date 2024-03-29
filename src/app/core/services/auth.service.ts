import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';
import { AnnouncementService } from './announcement.service';
import { DialogService } from './dialog.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authObserver = {
    next: (x: firebase.User) => this.authChange(x),
    error: (err: any) => console.error(err),
  };
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  private authState$: Observable<boolean>;
  constructor(private auth: AngularFireAuth, private banner: AnnouncementService, private dialog: DialogService, private router: Router) { }

  init() {
    this.auth.authState.subscribe(this.authObserver);
    this.authState$ = this.isLoggedIn.asObservable();
  }

  login(email: string, password: string): void {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.banner.displayTempMessage(`${value.user.email} has signed in.`, 5000);
        this.router.navigate(['home']);
      })
      .catch(reason => {
        this.dialog.showError('Login failed. Check the information entered and try again.');
        console.error(reason.message);
      });
  }

  async logout(): Promise<void> {
    try {
      await this.auth.auth.signOut();
      this.banner.displayTempMessage('You have been logged out', 5000);
    } catch (err) {
      this.dialog.showError('There was an issue logging you out.');
    }
  }

  async passwordReset(email: string) {
    try {
      await this.auth.auth.sendPasswordResetEmail(email);
    } catch (err) {

    }
    this.banner.displayTempMessage('If an account exists, you will receive an email to reset your password', 5000);
  }

  getLoginState(): Observable<boolean> {
    return this.authState$;
  }

  /**
   * Responds to authorization changes from the authstate observable.
   * @param user user info from Firebase
   */
  private authChange(user: firebase.User) {
    if (user) {
      this.isLoggedIn.next(true);
      console.log(user.email, 'has logged in.');
    } else {
      this.isLoggedIn.next(false);
      console.log('User is logged out.');
    }
  }

}
