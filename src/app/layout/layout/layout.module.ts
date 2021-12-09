import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/material.module';
import { ProfileComponent } from '../profile/profile.component';



@NgModule({
  declarations: [SideBarComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [SideBarComponent, ProfileComponent]
})
export class LayoutModule { }
