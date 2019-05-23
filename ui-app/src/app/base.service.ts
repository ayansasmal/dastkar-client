import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/**
 * @export
 * @class BaseService
 */
@Injectable()
export class BaseService {
  private source: string = undefined;
  private userNameValue = new BehaviorSubject('');
  private emailIdValue = new BehaviorSubject('');
  private authKeyValue = new BehaviorSubject('');
  private deviceIdValue = new BehaviorSubject('');
  private loginStatus: string = undefined;

  constructor() {
  }

  setUserName(username: string) {
    this.userNameValue.next(username);
  }

  setEmailId(emailId: string) {
    this.emailIdValue.next(emailId);
  }

  setAuthKey(authKey: string) {
    this.authKeyValue.next(authKey);
  }

  setDeviceId(deviceId: string) {
    this.deviceIdValue.next(deviceId);
  }

  getUserName(): any {
    return this.userNameValue;
  }

  getAuthKey(): any {
    return this.authKeyValue;
  }

  public isLoggedOn(): boolean {
    let authKey = undefined;
    this.getAuthKey().subscribe((value) => { authKey = value; });
    if (!authKey) {
      return false;
    }
    return true;
  }

  public reInitialize(): void {
    console.log('reinitializing baseService ' + this);
    this.userNameValue.next('');
    this.emailIdValue.next('');
    this.authKeyValue.next('');
    this.deviceIdValue.next('');
  }

  public get $source(): string {
    return this.source;
  }

  public set $source(value: string) {
    this.source = value;
  }

  public get $loginStatus(): string {
    return this.loginStatus;
  }

  public set $loginStatus(value: string){
    this.loginStatus = value;
  }

}
