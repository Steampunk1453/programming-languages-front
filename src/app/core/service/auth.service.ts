import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from "rxjs/operators";
import {ApiService} from "../../data/service/api.service";
import {User} from "../../data/schema/user";

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_URL = "/user";
  token: string;

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

  login(loginContext: LoginContextInterface): Observable<string> {
    return this.apiService.post(this.USER_URL + '/login', loginContext)
      .pipe(
        map((data) => {
          this.saveToken(data)
            return data;
          }
        )
      );
  }

  private saveToken(loginResponse: any) {
    if (loginResponse) {
      localStorage.setItem('token', loginResponse.token);
      console.log('Token:' + loginResponse.token);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

}
