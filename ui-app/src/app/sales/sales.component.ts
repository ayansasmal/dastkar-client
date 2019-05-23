import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.baseService.$source = '/sales';
    if (!this.baseService.isLoggedOn()) {
      this.router.navigate(['/login']);
    }
  }

}
