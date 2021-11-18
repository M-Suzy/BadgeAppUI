import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../shared/guard/role.guard';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
  path: 'user-list',
  component: UserListComponent,
  canActivate: [RoleGuard]
  },
  {
    path: 'badge-list',
    component: BadgeListComponent,
    //canActivate: [RoleGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

 }
