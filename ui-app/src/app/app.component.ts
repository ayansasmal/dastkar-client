import { LoginService } from './login/login.service';
import { AddService } from './add/add.service';
import { LoginHelperService } from './login-helper/login-helper.service';
import { Component } from '@angular/core';

import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService, BaseService, LoginService, LoginHelperService, AddService]
})
export class AppComponent {
  title = 'Dastkar Billing Application';
  username: string = undefined;
  isLoggedOn = false;
  constructor(baseService: BaseService) {

    baseService.getUserName().subscribe((value) => {
      this.username = value;
      if (!this.username || this.username === '') {
        this.isLoggedOn = false;
        this.username = 'Anonymous';
      } else {
        this.isLoggedOn = true;
      }
    });
  }
}
