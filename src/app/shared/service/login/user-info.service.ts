import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import  jwt_decode from 'jwt-decode';
import { UserInfoModel } from '../../model/user-info-model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private _http: HttpClient,
    private _cookieService: CookieService) {
}

private static getDecodedToken(token: string): any {
try {
return jwt_decode(token);
} catch (Error) {
console.log('Wrong token type. Can not decode.');
return undefined;
}
}

getCurrentUser(): UserInfoModel {
  const currentUser = new UserInfoModel();
  const token = this._cookieService.get('token');
  const decodedToken = UserInfoService.getDecodedToken(token);
  currentUser.username = decodedToken.user_name;
  currentUser.authorities = decodedToken.authorities;
  return currentUser;
}
}
