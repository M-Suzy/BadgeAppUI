import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationModel } from '../../model/registration-model';

@Injectable({
  providedIn: 'root',
  deps: [HttpClient]
})
export class RegistrationService {
  private readonly httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response' as 'response'
  }
  readonly registrationUrl: string;

  constructor(private http: HttpClient) { }
  register(user: RegistrationModel): Observable<HttpResponse<{ ok: boolean }>> {
    return this.http.post<{ ok: boolean }>(this.registrationUrl, user, this.httpOptions);
  } 
}
