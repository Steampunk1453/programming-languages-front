import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  post(endPoint: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}${endPoint}`, body)
      .pipe();
  }

}
