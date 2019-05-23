import { Injectable } from '@angular/core';

import { BaseService } from 'app/base.service';

import { LOGINCREDS } from 'app/app-mocks';

import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AddService {

  private source: string;
  private status: string;
  constructor(private router: Router, private baseService: BaseService, private http: Http) {

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

  public addUser(newUserData) {
    console.log(newUserData);
    return this.http.post('http://localhost:3000/rest/user/addUser', newUserData).toPromise();
  }

  public validateUsername(userName: string) {
    if (userName.length >= 5) {
      const data = {
        'userName': userName
      }
      return this.http.post('http://localhost:3000/rest/user/validateUsername', data).toPromise();
    }
  }
}
