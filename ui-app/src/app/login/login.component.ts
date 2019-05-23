import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetail: {
    'username': string,
    'password': string
  };

  constructor(private loginService: LoginService, private baseService: BaseService) {

  }

  login(): void {
    console.log('in login method');
    this.loginService.login(this.userDetail);
    // console.log('status ::' + status);
  };

  ngOnInit() {
    this.userDetail = {
      'username': undefined,
      'password': undefined
    };
  }

}
