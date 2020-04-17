import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Language} from '../schema/language';
import {ApiService} from "./api.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private LANGUAGE_URL = "/language/";

  constructor (private apiService: ApiService) {}

  create(language: Language): Observable<Language> {
    return this.apiService.post(this.LANGUAGE_URL, language)
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

  getAll(): Observable<Array<Language>> {
    return this.apiService.get(this.LANGUAGE_URL)
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

  getById(id: number): Observable<Language> {
    return this.apiService.get(`${this.LANGUAGE_URL}id/${id}`)
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

  getByName(name: string): Observable<Language> {
    return this.apiService.get(`${this.LANGUAGE_URL}id/${name}`)
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

  update(language: Language, id: string): Observable<Language> {
    return this.apiService.put(`${this.LANGUAGE_URL}${id}`, {language: language})
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

  delete(id: number): Observable<Language> {
    return this.apiService.get(`${this.LANGUAGE_URL}id/${id}`)
      .pipe(
        map((data) => {
            return data;
          }
        )
      );
  }

}
