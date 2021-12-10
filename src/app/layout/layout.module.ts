import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/material.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/edit-profile/change-password/change-password.component';



@NgModule({
  declarations: [
    SideBarComponent, 
    EditProfileComponent,
     ChangePasswordComponent,
      ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [SideBarComponent, ProfileComponent, EditProfileComponent, ChangePasswordComponent]
})
export class LayoutModule { }
