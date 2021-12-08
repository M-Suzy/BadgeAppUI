import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../service/login/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private _router: Router, private userInfoService: UserInfoService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.userInfoService.getCurrentUser();

      const permittedRole = route.data['role'];
        if (currentUser.role===permittedRole) {
          return true;
        }
      this._router.navigate(['/login']);
      return false;
    }
  
  
}
