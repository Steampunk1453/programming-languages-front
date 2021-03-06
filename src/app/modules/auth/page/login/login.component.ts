import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {catchError, delay, finalize, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from "../../../../core/service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  isLoading: boolean;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {

    this.buildForm();
  }

  ngOnInit() {}

  get form () {
    return this.loginForm.controls;
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;
    const credentials = this.loginForm.value;

    this.authService.login(credentials)
      .pipe(
        delay(1000),
        tap(user => this.router.navigate(['/home'])),
        finalize(() => this.isLoading = false),
        catchError(error => of(this.error = error))
      ).subscribe();
  }

  logout() {
    this.authService.logout()
  }

}
