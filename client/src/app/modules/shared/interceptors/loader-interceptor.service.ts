import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader/loader.service';
import { StaticService } from '../services/static/static.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private staticService: StaticService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const contains = this.staticService.skipSpecificURL.some((element) => request.url.includes(element));
    if (!contains) {
      this.loaderService.show();
      return next
        .handle(request)
        .pipe(finalize(() => this.loaderService.hide()));
    }
    return next.handle(request);
  }
}
