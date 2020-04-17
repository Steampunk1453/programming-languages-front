import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import {default as _rollupMoment, Moment} from 'moment';
import {LanguageService} from "../../../data/service/language.service";
import {catchError, map, tap} from "rxjs/operators";
import {ApiService} from "../../../data/service/api.service";
import {of} from "rxjs";
import {Language} from "../../../data/schema/language";

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class LanguageComponent implements OnInit {
  optionsSelect: Array<any>;
  date = new FormControl(moment());
  languageForm: FormGroup;
  error: string;
  languageResponse: Language;

  constructor(private formBuilder: FormBuilder,
              private languageService: LanguageService,
              private apiService: ApiService) {
    this.buildForm();
  }

  ngOnInit() {
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
  }

  private buildForm(): void {
    this.languageForm = this.formBuilder.group({
      name: ['', Validators.required],
      designed: ['', Validators.required],
      year: [moment()],
      version: ['', Validators.required],
      web: ['', Validators.required]
    });
  }

  createLanguage() {
    if (this.languageForm.invalid) {
      return Object.values(this.languageForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const language = this.languageForm.value;
    language.year = 2013
    this.languageService.create(language).pipe(
      catchError(error => of(this.error = error))
    ).subscribe((data) => {
      if(data) {
        this.languageResponse = data;
      }
    });

  }

  updateLanguage() {
    const language = this.languageForm.value;
    this.languageService.update(language, language.id).pipe(
      map((data) => {
          return data;
        }
      )
    );
  }

  deleteLanguage() {
    const language = this.languageForm.value;
    this.languageService.getById(language.id).pipe(
      map((data) => {
          return data;
        }
      )
    );
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.languageForm.get('year').setValue(ctrlValue.format('YYYY'));
  }

}
