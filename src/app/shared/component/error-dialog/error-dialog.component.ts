import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HttpError} from "../../../data/dto/http-error";

@Component({
  selector: 'app-root',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public httpError: HttpError) {}
}
