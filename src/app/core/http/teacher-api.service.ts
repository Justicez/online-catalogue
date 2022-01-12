import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TeacherModel } from '../models/teacher.model';
import { TeacherClassModel } from '../models/teacher-class.model';

@Injectable()
export class TeacherApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/teacher';

  public createTeacher(teacher: TeacherModel): Observable<TeacherModel> {
    return this.http.post<TeacherModel>(this.endpoint, teacher)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateTeacher(teacher: TeacherModel): Observable<TeacherModel> {
    return this.http.put<TeacherModel>(this.endpoint, teacher)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteTeacher(id: number): Observable<TeacherModel> {
    return this.http.delete<TeacherModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getAllTeachers(): Observable<TeacherModel[]> {
    return this.http.get<TeacherModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getTeacher(id: number): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getTeachersClasses(id: number): Observable<TeacherClassModel[]> {
    return this.http.get<TeacherClassModel[]>(this.endpoint + '/classes?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
