import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from 'app/user/user.component';
import { SalesComponent } from 'app/sales/sales.component';
import { ReportComponent } from 'app/report/report.component';
import { ProductComponent } from 'app/product/product.component';
import { EventComponent } from 'app/event/event.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { ArtisansComponent } from 'app/artisans/artisans.component';
import { LoginComponent } from 'app/login/login.component';
import { LogoutComponent } from 'app/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sales', component: SalesComponent },
  { path: 'report', component: ReportComponent },
  { path: 'event', component: EventComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'artisans', component: ArtisansComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
