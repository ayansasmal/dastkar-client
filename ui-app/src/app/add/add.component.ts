import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormControlDirective,
  FormControlName, FormGroupName, Validators, FormBuilder
} from '@angular/forms';

import { AddService } from './add.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addUser: boolean = undefined;
  userData: {
    'name': string,
    'password': string,
    'emailId': string,
    'lastName': undefined,
    'firstName': undefined,
    'userName': undefined
  };
  isUserNameAvailable: boolean = undefined;
  isAddUserSuccess: boolean = undefined;
  username: string = undefined;

  addUserForm: FormGroup;
  /*   aufName: FormGroup;
    aufFName: FormControl;
    aufLName: FormControl;
    aufEmail: FormControl;
    aufConfEmail: FormControl;
    aufPassword: FormControl;
    aufConfPassword: FormControl; */

  constructor(private addService: AddService, private baseService: BaseService, private fb: FormBuilder) { }

  ngOnInit() {

    if (this.baseService.$source && this.baseService.$source === '/user') {
      this.addUser = true;
      this.createAddUserForm();
    }
    this.userData = {
      'name': undefined,
      'password': undefined,
      'emailId': undefined,
      'lastName': undefined,
      'firstName': undefined,
      'userName': undefined
    }
    this.isUserNameAvailable = false;
  }

  // create add user form
  createAddUserForm() {
    this.addUserForm = this.fb.group({
      firstName: ['', [Validators.pattern('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$')]],
      lastName: ['', [Validators.pattern('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$')]],
      emailId: ['', [Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      confEmailId: ['', [Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      pass: '',
      confPass: '',
      username: ['', [Validators.pattern('[a-zA-Z0-9]+$')]]
    });
    this.createFormControls();
  }

  /*
  {
	"name":"ayan",
	"loginId":"ayansasmal",
	"password":"ayan"
}
  */
  submitAddUser() {
    console.log('Submitting app');
    console.log(this.addUserForm.controls.firstName);
    const localObject = this;
    this.userData.lastName = this.addUserForm.controls.lastName.value;
    this.userData.firstName = this.addUserForm.controls.firstName.value;
    this.userData.userName = this.addUserForm.controls.username.value;
    this.userData.emailId = this.addUserForm.controls.emailId.value;
    this.userData.password = this.addUserForm.controls.pass.value;
    this.addService.addUser(this.userData).then(function (response) {
      const data = response.json();
      if (data.status === 'success') {
        localObject.isAddUserSuccess = true;
      } else {
        localObject.isAddUserSuccess = false;
      }
    });
  }

  createFormControls() {
    /* this.aufFName = new FormControl('aufFName', Validators.required);
    this.aufLName = new FormControl('aufLName', Validators.required);
    this.aufEmail = new FormControl('aufEmail', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.aufConfEmail = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.aufPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.aufConfPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]); */
  }

  public onUserNameChange(value: string) {
    const localObject = this;
    if (value && this.addUserForm.controls.username.valid) {
      const promise = this.addService.validateUsername(value);
      if (promise === undefined) {
        return;
      }
      promise.then(function (response) {
        const data = response.json();
        if (data.status === 'success') {
          localObject.isUserNameAvailable = true;
        } else {
          localObject.isUserNameAvailable = false;
        }
      });
    }
  }

}
