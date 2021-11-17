import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { AuthService } from '../shared/service/login/auth.service';
import { UserLoginModel } from '../shared/model/login-model';
import { ViolationModel } from '../shared/model/violation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // animations: [routerTransition()],
})
export class LoginComponent {
  public loginFormGroup: FormGroup;
  isProcessing = false;
  isFailed = false;
  isFormValid = true;
  visibilityIcon = 'visibility';
  passwordInputType = 'password';
  violations: ViolationModel[] = [];

  constructor(public router: Router,
              private authenticationService: AuthService,
              private _formBuilder: FormBuilder,
              private _cookieService: CookieService) {
    this.loginFormGroup = _formBuilder.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onLogin() {
    if (this.loginFormGroup.valid) {
      this.isProcessing = true;
      const username = this.loginFormGroup.get('username').value;
      const password = this.loginFormGroup.get('password').value;
      this.authenticationService.login(new UserLoginModel(username, password))
      .subscribe(token => {
          this._cookieService.set('token', token.access_token);
          this._cookieService.set('refresh_token', token.refresh_token);
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['/profile']);
        },
        (err) => {
          this.router.navigate(['/login']);
          this.isFailed = true;
          this.isProcessing = false;
          this.isFormValid = true;
        }
      );
    } else {
      this.isFormValid = false;
      this.isFailed = false;
    }
  }

  getViolation(fieldName: string): ViolationModel {
    return this.violations.find(val => {
      return val.fieldName === fieldName;
    });
  }

  showHidePassword() {
    if (this.visibilityIcon === 'visibility') {
      this.visibilityIcon = 'visibility_off';
      this.passwordInputType = 'text';
    } else {
      this.visibilityIcon = 'visibility';
      this.passwordInputType = 'password';
    }
  }
}

