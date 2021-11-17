import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLoginModel } from '../../model/login-model';
import { TokenModel } from '../../model/token-model';

@Injectable({
  providedIn: 'root',
  deps: [HttpClient, CookieService]
})
export class AuthService {
  [x: string]: any;
  private readonly _loginUrl = environment.authApiUri + '/oauth/token';
  private httpOptions = {
     headers: new  HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${environment.clientId}:${environment.clientSecret}`)
     }),
  }
  private readonly httpOptionsForRefresh = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${environment.clientId}:${environment.clientSecret}`),
      'refresh': 'refresh'
    }),
  };
  constructor(private http: HttpClient, 
    private cookieService: CookieService) { }

    getNewToken(): Observable<TokenModel> {
      const refreshToken = this.cookieService.get('refresh_token');
      let httpParams = new HttpParams();
      httpParams = httpParams.append('refresh_token', refreshToken);
      httpParams = httpParams.append('grant_type', 'refresh_token');
      return this.http.post<TokenModel>(this._loginUrl, httpParams, this.httpOptionsForRefresh);
    }
    
    getToken(): string | null {
      if (this.cookieService.check('token')) {
        return this.cookieService.get('token');
      }
      return null;
    }
  
    isAuthenticated(): boolean {
      return this.getToken() !== null;
    }
  

  login(user: UserLoginModel): Observable<TokenModel>{
    let params = new HttpParams();
    params = params.append('username', user.userName);
    params = params.append('password', user.userPassword);
    params = params.append('grant_type', 'password');
    return this.http.post<TokenModel>(
      this._loginUrl, params.toString(), this.httpOptions);
  }

  logOut(){
    this.cookieService.deleteAll('/');
    localStorage.setItem('isLoggedIn', 'false');
  }
}
