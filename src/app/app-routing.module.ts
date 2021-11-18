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
      path: "layout",
      loadChildren: () => import("./layout/layout.module").then(m => m.LayoutModule)
    },
    {path: '**', redirectTo: 'error', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}