import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViolationModel } from '../shared/model/violation';
import { RegistrationService } from '../shared/service/register/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;
  isProcessing = false;
  showMessage = false;
  ok = false;
  visibilityIcon = 'visibility';
  passwordInputType = 'password';
  message = '';
  violations: ViolationModel[] = [];

  constructor(private router: Router,
              private _registrationService: RegistrationService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
      confirmPassword: ['', [Validators.required]]
    }, {updateOn: 'change'});
  }

  onSignedUp() {
    if (this.registerFormGroup.valid) {
      const user = this.registerFormGroup.value;
      this._registrationService.register(user)
        .subscribe(response => {
            if (response.body) {
              this.showMessage = true;
              this.ok = true;
              setTimeout(() => this.goToSignIn(), 500);
            }
          },
          response => {
            this.violations = response.error.violations;
            this.showMessage = true;
            this.isProcessing = false;
            this.ok = false;
            this.clearInvalidFields();
          });
      this.isProcessing = true;
    }
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

  goToSignIn() {
    this.router.navigate(['/login']);
  }

  ngDoCheck(): void {
    if (!this.ok && this.registerFormGroup.touched) {
      this.showMessage = false;
    }
    this.message = this.ok ? 'registration was successful' : 'Registration has not succeed';
  }

  getViolation(fieldName: string): ViolationModel {
    return this.violations.find(val => {
      return val.fieldName === fieldName;
    });
  }

  clearInvalidFields() {
    this.violations.forEach(value => {
      const {fieldName} = value;
      this.registerFormGroup.get(fieldName).setValue('');
    });
  }
}
