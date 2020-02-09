import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInformation = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
  resetInformation = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const emailValue = this.loginInformation.controls.email.value;
    const passwordValue = this.loginInformation.controls.password.value;
    this.loginInformation.reset();
    this.auth.login(emailValue, passwordValue);
  }

  resetPassword(): void {
    const emailValue = this.resetInformation.controls.email.value;
    this.resetInformation.reset();
    this.resetInformation.markAsUntouched();
    this.auth.passwordReset(emailValue);
  }

  fieldIsNotValidEmail(): string {
    return 'Do you think me a fool? Enter a *valid* email, please!';
  }
  fieldIsRequiredMessage(): string {
    return `Hey, don't leave me empty. You need me filled out!`;
  }

}
