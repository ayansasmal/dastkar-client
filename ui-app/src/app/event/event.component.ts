import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'app/search/search.service';
import { BaseService } from 'app/base.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private searchService: SearchService, private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.baseService.$source = '/event';
    if (!this.baseService.isLoggedOn()) {

      this.router.navigate(['/login']);
    }
  }

}
