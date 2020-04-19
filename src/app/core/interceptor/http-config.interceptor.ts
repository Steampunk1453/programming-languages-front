import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ErrorDialogService} from "../../shared/service/error-dialog.service";
import {HttpError} from "../../data/dto/http-error";
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private errorDialogService: ErrorDialogService,
              private toastService: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          if(event.status && event.statusText) {
            const message: string = `Action executed successfully: ${event.statusText}`
            this.toastService.success(message)
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let httpError: HttpError;
        httpError = {
          code: error && error.error && error.error.errorCode ? error.error.errorCode: '',
          message: error && error.error && error.error.message ? error.error.message: '',
          status: error.status
        };
        this.toastService.error(httpError.code, httpError.message)
        return throwError(error);
      }));
  }

}
