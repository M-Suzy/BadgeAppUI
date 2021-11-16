import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {AppMaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }