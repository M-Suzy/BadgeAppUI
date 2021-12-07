import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserBadgesComponent } from './user-badges/user-badges.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBadgeCardsComponent } from './user-badges/user-badge-cards/user-badge-cards.component';
import { BadgeCardComponent } from './user-badges/user-badge-cards/badge-card/badge-card.component';



@NgModule({
  declarations: [
    UserComponent,
    UserBadgesComponent,
    UserDashboardComponent,
    UserBadgeCardsComponent,
    BadgeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
