import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {ApiService} from "../../data/service/api.service";
import {User} from "../../data/schema/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_URL = '/user';
  token: string;
  isAuthenticated = false;

  constructor(private apiService: ApiService) {}

  register(user: User): Observable<User> {
    return this.apiService.post(this.USER_URL + '/register', user)
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

  login(login: User): Observable<string> {
    return this.apiService.post(this.USER_URL + '/login', login)
      .pipe(
        map((data) => {
          this.saveToken(data)
          this.isAuthenticated = true;
            return data;
          }
        )
      );
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    console.log('User logout');
  }

  private saveToken(loginResponse: any) {
    if (loginResponse) {
      localStorage.setItem('token', loginResponse.token);
      console.log('Token: ' + loginResponse.token);
    }
  }
}
