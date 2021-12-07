import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
      path: "login",
      loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    },
    {
      path: "register",
      loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)
    },
    {
      path: "admin",
      loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
    },
    {
      path: "user",
      loadChildren: () => import("./user/user.module").then(m => m.UserModule)
    },
    {path: '**', redirectTo: 'error', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}