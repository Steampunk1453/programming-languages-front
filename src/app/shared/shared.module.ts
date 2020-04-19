import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';


import {
  faAsterisk,
  faBars,
  faBook,
  faCaretDown,
  faCaretUp,
  faCheck,
  faCog,
  faEdit,
  faExclamationTriangle,
  faFilter,
  faLanguage,
  faLightbulb,
  faPaintBrush,
  faPlayCircle,
  faPlus,
  faPowerOff,
  faRocket,
  faSquare,
  faStream,
  faTasks,
  faTimes,
  faTrash,
  faUserCircle,
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {ControlMessagesComponent} from './component/control-messages/control-messages.component';
import {SpinnerComponent} from './component/spinner/spinner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MaterialModule} from "./material.module";
import {NgxMasonryModule} from "ngx-masonry";
import {library} from "@fortawesome/fontawesome-svg-core";
import {ErrorDialogComponent} from "./component/error-dialog/error-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {DatepickerInputComponent} from "./component/date-picker/components/datepicker-input/datepicker-input.component";

library.add(
  faGithub,
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
);

@NgModule({
  declarations: [ControlMessagesComponent, SpinnerComponent, ErrorDialogComponent, DatepickerInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule,
    NgxMasonryModule,
    MatDialogModule,
    ControlMessagesComponent,
    SpinnerComponent,
    ErrorDialogComponent,
    DatepickerInputComponent,
  ],
  providers: [
    DatePipe
  ],
})
export class SharedModule { }
