import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "../profile/profile.component";
import { UserBadgesComponent } from "./user-badges/user-badges.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserComponent } from "./user.component";

const routes: Routes = [
    { path: '', component: UserComponent, 
      children: [
        { path: 'badges', component: UserBadgesComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'dashboard', component: UserDashboardComponent },
      ]},
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }