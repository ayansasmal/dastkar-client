import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-helper',
  templateUrl: './login-helper.component.html',
  styleUrls: ['./login-helper.component.css']
})
export class LoginHelperComponent implements OnInit {
  result: string;
  constructor() { }

  ngOnInit() {
    this.result = 'authFailure';
  }

}
