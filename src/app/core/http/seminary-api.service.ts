import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SeminaryModel } from '../models/seminary.model';

@Injectable()
export class SeminaryApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/seminary';

  public createSeminary(seminary: SeminaryModel): Observable<SeminaryModel> {
    return this.http.post<SeminaryModel>(this.endpoint, seminary)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateSeminary(seminary: SeminaryModel): Observable<SeminaryModel> {
    return this.http.put<SeminaryModel>(this.endpoint, seminary)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteSeminary(id: number): Observable<SeminaryModel> {
    return this.http.delete<SeminaryModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getAllSeminaries(): Observable<SeminaryModel[]> {
    return this.http.get<SeminaryModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
