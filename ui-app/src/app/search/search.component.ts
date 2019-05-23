import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  source = '';
  constructor(private searchService: SearchService) {
    console.log(searchService);
    this.source = searchService.getSource();
  }

  ngOnInit() {
  }

}
