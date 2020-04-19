import {Component} from '@angular/core';
import {AuthService} from "../../core/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/languages/detail', title: 'Create Language' },
  ];

  constructor(private authService: AuthService,
              private router: Router) {}

  logout() {
    this.authService.logout()
    this.router.navigate(['/auth/login'])
  }
}
