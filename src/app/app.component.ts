import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SDO-Accounting-OSDS';

  showSideBar: boolean = true;
  sideBarOpen = true;
  sideBarMode: MatDrawerMode = 'side';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSideBar = this.router.url !== '/login';
      }
    });
  }
}