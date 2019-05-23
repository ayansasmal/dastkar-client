import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.css']
})
export class ArtisansComponent implements OnInit {

  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.baseService.$source = '/artisans';
    if (!this.baseService.isLoggedOn()) {

      this.router.navigate(['/login']);
    }
  }

}
