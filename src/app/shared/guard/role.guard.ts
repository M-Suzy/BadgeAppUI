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
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.userInfoService.getCurrentUser();

      const permittedRolesArray = route.data['permittedRoles'];
      for (const permittedRole of permittedRolesArray) {
        if (currentUser.authority.includes(permittedRole)) {
          return true;
        }
      }
      this._router.navigate(['/login']);
      return false;
    }
  
  
}
