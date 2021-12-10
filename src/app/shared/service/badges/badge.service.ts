import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private readonly _httpOptions = {
    observe: 'response' as 'response',
  };

  constructor(private _http: HttpClient, private _userService : UserService) { }

  

}
