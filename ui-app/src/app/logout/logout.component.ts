import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    if (!this.baseService.isLoggedOn()) {
      this.baseService.$source = undefined;
      this.router.navigate(['/login']);
      return;
    }
    this.baseService.reInitialize();
  }

}
