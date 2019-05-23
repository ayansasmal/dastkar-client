import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginHelperComponent } from 'app/login-helper/login-helper.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent, children: [
            { path: 'authError', component: LoginHelperComponent, outlet: 'loginAction' },
            { path: 'forgetPassword', component: LoginHelperComponent, outlet: 'loginAction' },
            { path: 'newUser', component: LoginHelperComponent, outlet: 'loginAction' },
            { path: 'resetPassword', component: LoginHelperComponent, outlet: 'loginAction' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
