import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  private _menufor = '';
  public isProduct = false;
  public isUser = false;
  @Input()
  set menufor(menufor: string) {
    this._menufor = (menufor && menufor.trim()) || '<no name set>';
  }
  get menufor(): string { return this._menufor; }

  constructor() {
  }

  ngOnInit() {
    if (this._menufor === 'product') {
      this.isProduct = true;
    } else if (this._menufor === 'user') {
      this.isUser = true;
    }
  }

}
