import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { BaseService } from 'app/base.service';

import { LOGINCREDS } from 'app/app-mocks';

import { Router } from '@angular/router';

import { LoginHelperService } from 'app/login-helper/login-helper.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private source: string;
  private status: string;
  private http: any;
  constructor(private router: Router, private baseService: BaseService, private loginHelperService: LoginHelperService, http: Http) {
    this.http = http;
  }

  public get $source(): string {
    return this.source;
  }

  public set $source(value: string) {
    this.source = value;
  }


  public get $status(): string {
    return this.status;
  }

  public set $status(value: string) {
    this.status = value;
  }
  /**
   * login
   */
  public login(loginCreds) {
    if (loginCreds) {
      console.log(loginCreds);
      // this.status = this.validateLogin(loginCreds);
      const promise = this.validateLogin(loginCreds);
      promise.then(res => { // Success
        console.log(res.json());
        const response = res.json();
        console.log(response.status);
        if (response.status === 'success') {
          this.baseService.setUserName(response.name.charAt(0).toUpperCase() + response.name.slice(1));
          this.baseService.setEmailId(response.emailId);
          this.loginHelperService.generateAuthKey();
          this.status = 'success';
          this.baseService.$loginStatus = this.status;
        } else {
          this.status = 'authFailure';
          this.baseService.$loginStatus = this.status;
        }
        if (this.status && this.status === 'success') {
          console.log('source:: ' + this.baseService.$source);
          if (this.baseService.$source && this.baseService.$source !== '') {
            this.router.navigate([this.baseService.$source]);
          } else {
            this.router.navigate(['/user']);
          }
          return;
        } else if (this.status && this.status === 'newUser') {
          console.log('new user detected');
          this.router.navigate(['/user']);
          return;
        }
      }, err => {
        LOGINCREDS.forEach(credential => {
          if (credential['userName'] === loginCreds['userName'] || credential['emailId'] === loginCreds['userName']) {
            console.log(credential);
            if (credential['password'] === loginCreds['password']) {
              console.log('got successfull credentials');
              this.baseService.setUserName(credential['userName'].charAt(0).toUpperCase() + credential['userName'].slice(1));
              this.baseService.setEmailId(credential['emailId']);
              this.loginHelperService.generateAuthKey();
              this.status = 'success';
              this.baseService.$loginStatus = this.status;
            } else {
              this.status = 'authFailure';
              this.baseService.$loginStatus = this.status;
            }
          }
        });
        if (this.status && this.status === 'success') {
          console.log('source:: ' + this.baseService.$source);
          if (this.baseService.$source && this.baseService.$source !== '') {
            this.router.navigate([this.baseService.$source]);
          } else {
            this.router.navigate(['/user']);
          }
          return;
        } else if (this.status && this.status === 'newUser') {
          console.log('new user detected');
          this.router.navigate(['/user']);
          return;
        }
      });
    }
    // this.router.navigate(['/user']);
    return;
  }

  private validateLogin(loginCreds): any {
    status = '';
    const data = {
      'userName': loginCreds['userName'],
      'password': loginCreds['password']
    }
    return this.http.post('http://localhost:3000/rest/user/login', data).toPromise();
    // if (status === '') {
    //   status = 'newUser';
    // }
    // this.baseService.$loginStatus = status;
    // return status;
  }
}
