import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // animations: [routerTransition()],
})
export class LoginComponent {

  logo = 'assets/images/icons/logo.png';
  public loginFormGroup: FormGroup;
  isProcessing = false;
  isFailed = false;
  isFormValid = true;
  visibilityIcon = 'visibility';
  passwordInputType = 'password';

  constructor(public router: Router,
              //private _authenticationService: AuthenticationService,
              //private _userDetailsService: UserDetailsService,
              private _formBuilder: FormBuilder,
              private _cookieService: CookieService) {

    //_authenticationService.signOut();
    this.loginFormGroup = _formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    //_authenticationService.signOut();
  }

  onLoggedin() {
    if (this.loginFormGroup.valid) {
      this.isProcessing = true;
      const username = this.loginFormGroup.get('username').value;
      const password = this.loginFormGroup.get('password').value;
    }
    //  this._authenticationService.login({username, password})
    //    .subscribe(token => {
    //        this._cookieService.set('token', token.access_token);
    //        this._cookieService.set('refresh_token', token.refresh_token);
    //        localStorage.setItem('isLoggedin', 'true');
    //        this.router.navigate(['/dashboard']);
    //      },
    //      (err) => {
    //        this.router.navigate(['/login']);
    //        this.isFailed = true;
    //        this.isProcessing = false;
    //        this.isFormValid = true;
    //      }
    //    );
    //} else {
    //  this.isFormValid = false;
    //  this.isFailed = false;
    //}
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
//function routerTransition(): any {
//  throw new Error('Function not implemented.');
//}

