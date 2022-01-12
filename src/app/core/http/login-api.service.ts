import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/auth';

  public logIn(username: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.endpoint, { username, password })
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
