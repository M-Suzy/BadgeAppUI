import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [SideBarComponent]
})
export class LayoutModule { }
