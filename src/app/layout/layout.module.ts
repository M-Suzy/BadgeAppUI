import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { PersonalBadgesComponent } from './personal-badges/personal-badges.component';
import { AllBadgesComponent } from './all-badges/all-badges.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BadgeCreateComponent } from './admin/badge-create/badge-create.component';
import { BadgeEditComponent } from './admin/badge-edit/badge-edit.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppMaterialModule } from '../material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    PersonalBadgesComponent,
    AllBadgesComponent,
    UserListComponent,
    BadgeCreateComponent,
    BadgeEditComponent,
    BadgeListComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
