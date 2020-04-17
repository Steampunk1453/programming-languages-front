import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  post(endPoint: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.API_URL}${endPoint}`, body).pipe();
  }

  getAll(endPoint: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${endPoint}`).pipe();
  }

  get(endPoint: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${endPoint}`).pipe();
  }

  put(endPoint: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.API_URL}${endPoint}`, body).pipe();
  }

  delete(endPoint: string): Observable<any> {
    return this.http.delete(`${environment.API_URL}${endPoint}`).pipe();
  }

}
