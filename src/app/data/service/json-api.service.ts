import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
// @ts-ignore
import data from './json/data.json';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  get(url: string): Observable<any> {
    switch (url) {
      case '/languages':
        return of(data.languages);
      default:
        const id = url.substring(url.lastIndexOf('/') + 1);
        return of(data.languages[id]);
    }
  }
}
