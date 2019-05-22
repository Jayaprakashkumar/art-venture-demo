import { Component } from '@angular/core';

import { MENU_ITEMS_1 } from './pages-menu';
import { MENU_ITEMS_2 } from './pages-menu'; 

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu_1"></nb-menu>
      <nb-sidebar-header *ngIf="currentTheme !== 'corporate'">
      <a href="#" class="btn btn-hero-success main-btn">
        <i class="ion ion-social-github"></i> <span>Support Us</span>
      </a>
    </nb-sidebar-header>
      <nb-menu [items]="menu_2"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu_1 = MENU_ITEMS_1;
  menu_2 = MENU_ITEMS_2;

  artist_name:String = "John wick";

}