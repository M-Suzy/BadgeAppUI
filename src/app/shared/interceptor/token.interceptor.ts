import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, catchError, filter, mergeMap, Observable, take, throwError } from 'rxjs';
import { AuthService } from '../service/login/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private _authService: AuthService, private _cookieService: CookieService, private _router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.get('refresh')) {
      request = this.addAuthenticationToken(request);
    }
    console.log(request);
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status !== 401 || err.error.error_description !== 'Access token expired: ' + this._authService.getToken()) {
          return throwError(err);
        }
        if (this.refreshTokenInProgress) {
          return this.refreshTokenSubject.pipe(
            filter(result => result !== null)
            , take(1)
            , mergeMap(() => next.handle(this.addAuthenticationToken(request)))
          );
        } else {
          this.refreshTokenInProgress = true;
          this.refreshTokenSubject.next(null);
          return this._authService.getNewToken().pipe(
              mergeMap((tokenModel: { access_token: string; refresh_token: string; }) => {
              this.refreshTokenInProgress = false;
              this._cookieService.set('token', tokenModel.access_token);
              this._cookieService.set('refresh_token', tokenModel.refresh_token);
              this.refreshTokenSubject.next(tokenModel.access_token);
              return next.handle(this.addAuthenticationToken(request));
            }), catchError(error => {
              this.refreshTokenInProgress = false;
              this._authService.logOut();
              this._router.navigate(['/login']);
              return throwError(error);
            })
          );
        }
      })
    );
  }

  addAuthenticationToken(request) {
    const accessToken = this._authService.getToken();
    if (!accessToken) {
      return request;
    }
    return request.clone({
      setHeaders: {
        Authorization: `bearer ${this._authService.getToken()}`
      }
    });
  }
}

