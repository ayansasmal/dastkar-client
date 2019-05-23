import { Injectable } from '@angular/core';

import { BaseService } from 'app/base.service';

@Injectable()
export class SearchService {

  private source: string;
  constructor() {

  }

  /**
   * getSource
   */
  public getSource() {
    return this.source;
  }

  /**
   * setSource
   */
  public setSource(source: string) {
    this.source = source;
  }

}
