import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/languages', title: 'Languages' }
  ];

  constructor() {}

  ngOnInit() {
  }

}
