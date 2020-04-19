import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from "../../../../data/service/language.service";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Language} from "../../../../data/schema/language";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languageForm: FormGroup;
  id = new FormControl();
  error: string;
  languageResponse: Language;
  isCreateActive: boolean
  isUpdateActive: boolean

  constructor(private formBuilder: FormBuilder,
              private languageService: LanguageService,
              private route: ActivatedRoute,
              private router: Router) {

    this.buildForm();
  }

  ngOnInit() {
    let id: string = '';
    this.route.params.subscribe(params => {
      id = params['id']
    });
    this.getFormElements(id);
  }

  buildForm(): void {
    this.languageForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      designed: ['', Validators.required],
      year: ['', Validators.required],
      version: ['', Validators.required]
    });
  }

  createLanguage() {
    if (this.validateLanguage()) {
      const language = this.languageForm.value;
      this.languageService.create(language).pipe(
        catchError(error => of(this.error = error)))
        .subscribe((data) => {
          if (data) {
            this.languageResponse = data;
          }
        });
    }
  }

  updateLanguage() {
    if (this.validateLanguage()) {
      const language = this.languageForm.value;
      this.languageService.update(language, language.id).pipe(
        catchError(error => of(this.error = error)))
        .subscribe((data) => {
          if (data) {
            this.languageResponse = data;
            this.router.navigate(['/languages/list'])
          }
        });
    }
  }

  private getFormElements(id: string) {
    if (id) {
      this.loadLanguage(id);
      this.isUpdateActive = true
      this.isCreateActive = false
    } else {
      this.isCreateActive = true
      this.isUpdateActive = false
    }
  }

  private loadLanguage(id: string) {
    this.languageService.getById(id).pipe(
      catchError(error => of(this.error = error)))
      .subscribe((data) => {
        if (data) {
          this.languageForm.setValue({
            id: data.id,
            name: data.name,
            designed: data.designed,
            year: data.year,
            version: data.version
          });
        }
      });
  }

  private validateLanguage() {
    if (this.languageForm.invalid) {
      return Object.values(this.languageForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
        return false;
      });
    }
    return true
  }
}
