import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AdminComponent } from './admin.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { BadgeRequestsComponent } from './badge-requests/badge-requests.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent, 
    children: [
      { path: 'users', component: UserListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'badges', component: BadgeListComponent },
      { path: 'requested-badges', component: BadgeRequestsComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
