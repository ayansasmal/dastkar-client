import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from 'app/search/search.component';
import { AddComponent } from 'app/add/add.component';
import { DeleteComponent } from 'app/delete/delete.component';
import { UpdateComponent } from 'app/update/update.component';

import { ProductComponent } from './product.component';


const routes: Routes = [
    {
        path: 'product', component: ProductComponent, children: [
            { path: 'search', component: SearchComponent, outlet: 'productAction' },
            { path: 'add', component: AddComponent, outlet: 'productAction' },
            { path: 'delete', component: DeleteComponent, outlet: 'productAction' },
            { path: 'update', component: UpdateComponent, outlet: 'productAction' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
