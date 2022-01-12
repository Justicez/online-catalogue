import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ClassTypeModel } from '../models/class-type.model';

@Injectable()
export class ClassTypeApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/classType';

  public createClassType(classType: ClassTypeModel): Observable<ClassTypeModel> {
    return this.http.post<ClassTypeModel>(this.endpoint, classType)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateClassType(classType: ClassTypeModel): Observable<ClassTypeModel> {
    return this.http.put<ClassTypeModel>(this.endpoint, classType)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteClassType(id: number): Observable<ClassTypeModel> {
    return this.http.delete<ClassTypeModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getAllClassTypes(): Observable<ClassTypeModel[]> {
    return this.http.get<ClassTypeModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
