import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { AddEditDialogComponent } from './badge-list/add-edit-dialog/add-edit-dialog.component';
import { DeleteDialogComponent } from './badge-list/delete-dialog/delete-dialog.component';
import { BadgeRequestsComponent } from './badge-requests/badge-requests.component';
import { AdminComponent } from './admin.component';
import { BadgeCardsComponent } from './badge-list/badge-cards/badge-cards.component';
import { AppMaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';


@NgModule({
  declarations: [
    UserListComponent,
    BadgeListComponent,
    AddEditDialogComponent,
    DeleteDialogComponent,
    BadgeRequestsComponent,
    AdminComponent,
    BadgeCardsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdminModule { }
