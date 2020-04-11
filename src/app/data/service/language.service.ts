import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Language } from '../schema/language';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor (
    private jsonApiService: JsonApiService
  ) {}

  getAll(): Observable<Array<Language>> {
    return this.jsonApiService.get('/languages');
  }

  getSingle(id: number): Observable<Language> {
    return this.jsonApiService.get('/languages/' + id);
  }
}
