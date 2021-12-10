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
import { BadgeRequestCardsComponent } from './badge-requests/badge-request-cards/badge-request-cards.component';
import { UserCardsComponent } from './user-list/user-cards/user-cards.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    UserListComponent,
    BadgeListComponent,
    AddEditDialogComponent,
    DeleteDialogComponent,
    BadgeRequestsComponent,
    AdminComponent,
    BadgeCardsComponent,
    BadgeRequestCardsComponent,
    UserCardsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule,
    FormsModule, 
    ReactiveFormsModule, 
    LayoutModule
  ]
})
export class AdminModule { }
