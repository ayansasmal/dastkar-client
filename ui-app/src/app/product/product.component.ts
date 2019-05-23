import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) {
    this.searchService.setSource('product');
  }

  ngOnInit() {
    this.baseService.$source = '/product';
    if (!this.baseService.isLoggedOn()) {

      this.router.navigate(['/login']);
    }
  }

}
