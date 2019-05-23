import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ;
  // tslint:disable-next-line:no-trailing-whitespace
  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) {
    this.searchService.setSource('user');
    // console.log('Search source' + this.searchService.getSource());
  }

  ngOnInit() {
    this.baseService.$source = '/user';
    if (!this.baseService.isLoggedOn()) {
      this.router.navigate(['/login']);
    }
  }

}
