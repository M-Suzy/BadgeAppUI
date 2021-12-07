import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserBadgesComponent } from './user-badges/user-badges.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBadgeCardsComponent } from './user-badges/user-badge-cards/user-badge-cards.component';
import { BadgeCardComponent } from './user-badges/user-badge-cards/badge-card/badge-card.component';
import { LayoutModule } from '../layout/layout/layout.module'
import { AppMaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    UserBadgesComponent,
    UserDashboardComponent,
    UserBadgeCardsComponent,
    BadgeCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    AppMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UserModule { }
