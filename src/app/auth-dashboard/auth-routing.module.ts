import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthDashboardComponent } from './auth-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: AuthDashboardComponent,
        children:[
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    } 
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}