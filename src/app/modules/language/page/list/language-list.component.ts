import {Component, ViewChild} from '@angular/core';
import {Language} from "../../../../data/schema/language";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LanguageService} from "../../../../data/service/language.service";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent {
  languages: Language[]
  displayedColumns = ['name', 'designed', 'year', 'version', 'total', 'stars', 'forks', 'watchers',  'openIssues', 'operations'];
  dataSource: MatTableDataSource<Language> = new MatTableDataSource<Language>();
  loading = true;
  error: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private languageService: LanguageService,
              private snackBar: MatSnackBar,
              private router: Router) {

    this.languageService.getAll().pipe(
      catchError(error => of(this.error = error)))
      .subscribe((data) => {
        if(data) {
          this.languages = data;
          this.dataSource = new MatTableDataSource(this.languages);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loading = false;
        }
      });
  }

  editLanguage(language: Language) {
    this.snackBar.open(`Editing language #${language.name}`, 'Edit', {
      duration: 2000
    });
    let url: string = '/languages/detail/';
    this.router.navigate([url + language.id]);
  }

  deleteLanguage(language: Language) {
    this.snackBar.open(`Deleting language #${language.name}`, 'Delete', {
      duration: 2000
    });
    this.languageService.delete(language.id).pipe(
      catchError(error => of(this.error = error)))
      .subscribe();
      this.dataSource.data.splice(this.dataSource.data.indexOf(language), 1);
      this.dataSource.paginator = this.paginator
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
