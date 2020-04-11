import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../../../shared/service/validation.service';
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {AuthService} from "../../../../core/service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error: string;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.buildForm();
  }

  get form () {
    return this.registerForm.controls;
  }

  buildForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password:  ['', [ Validators.required, ValidationService.passwordValidator]],
      email:  ['', [ Validators.required, ValidationService.emailValidator]],
    });
  }

  registerUser() {
    const user = this.registerForm.value;
    this.authService.register(user).pipe(
      tap(user => this.router.navigate(['/auth/login'])),
      catchError(error => of(this.error = error))
    ).subscribe();
  }

}
