import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardSummary } from '../../model/dashboard-summary.model';
import { UserGeneralInfo } from '../../model/user-general-info.model';
import {UserBadgesSummary} from '../../model/user-badges-summary.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _httpOptions = {
    observe: 'response' as 'response',
  };

  private readonly _userEditUrl: string = environment.userAPiUri + '/edit/user';
  private readonly _userEditPasswordrl: string = environment.userAPiUri + '/edit/user/password';
  private readonly _findUsersUrl: string = environment.userAPiUri + '/find/all';
  private readonly _dashboardSummaryUrl: string = environment.userAPiUri + '/user/dashboard/summary';
  private readonly _badgesSummaryUrl: string = environment.userAPiUri + '/user/badges/summary';
  private readonly _generalInfoUrl: string = environment.userAPiUri + '/user/general/info';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<HttpResponse<UserGeneralInfo[]>> {
    return this._http.get<UserGeneralInfo[]>(
      this._findUsersUrl,
      this._httpOptions);
  }

  getDashboardSummary(): Observable<HttpResponse<DashboardSummary>> {
    return this._http.get<DashboardSummary>(
      this._dashboardSummaryUrl,
      this._httpOptions
    );
  }

  getBadgesSummary(): Observable<HttpResponse<UserBadgesSummary>> {
    return this._http.get<UserBadgesSummary>(
      this._badgesSummaryUrl,
      this._httpOptions
    );
  }

  getGeneralInfo(): Observable<HttpResponse<UserGeneralInfo>> {
    return this._http.get<UserGeneralInfo>(
      this._generalInfoUrl,
      this._httpOptions
    )
  }
  



}
