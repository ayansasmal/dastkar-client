import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.baseService.$source = '/report';
    if (!this.baseService.isLoggedOn()) {
      this.router.navigate(['/login']);
    }
  }

}
