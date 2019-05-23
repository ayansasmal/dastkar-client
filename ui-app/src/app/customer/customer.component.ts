import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.baseService.$source = '/customer';
    if (!this.baseService.isLoggedOn()) {

      this.router.navigate(['/login']);
    }
  }

}
