import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
