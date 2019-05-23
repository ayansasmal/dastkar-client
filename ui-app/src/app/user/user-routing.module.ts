import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from 'app/search/search.component';
import { AddComponent } from 'app/add/add.component';
import { DeleteComponent } from 'app/delete/delete.component';
import { UpdateComponent } from 'app/update/update.component';

import { UserComponent } from './user.component';


const routes: Routes = [
    {
        path: 'user', component: UserComponent, children: [
            { path: 'search', component: SearchComponent, outlet: 'userAction' },
            { path: 'add', component: AddComponent, outlet: 'userAction' },
            { path: 'delete', component: DeleteComponent, outlet: 'userAction' },
            { path: 'update', component: UpdateComponent, outlet: 'userAction' }
        ]
    }, {
        path: '**', redirectTo: '/logout', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [],
    exports: [RouterModule]
})
export class UserRoutingModule { }
