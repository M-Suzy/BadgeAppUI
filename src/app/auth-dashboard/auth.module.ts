import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppMaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: []
})
export class AuthModule { }