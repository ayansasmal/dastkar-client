import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { EventComponent } from './event/event.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { ReportComponent } from './report/report.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';

import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { LoginHelperComponent } from './login-helper/login-helper.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomerComponent,
    EventComponent,
    ProductComponent,
    SalesComponent,
    ArtisansComponent,
    ReportComponent,
    SearchComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    LoginComponent,
    LoginHelperComponent,
    LogoutComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ProductRoutingModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
