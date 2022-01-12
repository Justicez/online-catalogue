import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ScheduledClassModel } from '../models/scheduled-class.model';

@Injectable()
export class ScheduledClassApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/scheduledclass';

  public createScheduledClass(scheduledClass: ScheduledClassModel): Observable<ScheduledClassModel> {
    return this.http.post<ScheduledClassModel>(this.endpoint, scheduledClass)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateScheduledClass(scheduledClass: ScheduledClassModel): Observable<ScheduledClassModel> {
    return this.http.put<ScheduledClassModel>(this.endpoint, scheduledClass)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteScheduledClass(id: number): Observable<ScheduledClassModel> {
    return this.http.delete<ScheduledClassModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public GetAllScheduledClasses(): Observable<ScheduledClassModel[]> {
    return this.http.get<ScheduledClassModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public GetScheduledClassesForStudent(studentId: number): Observable<ScheduledClassModel[]> {
    return this.http.get<ScheduledClassModel[]>(this.endpoint + '/student?id=' + studentId)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public GetScheduledClassesForTeacher(teacherId: number, startingAt: Date): Observable<ScheduledClassModel[]> {
    return this.http.get<ScheduledClassModel[]>(this.endpoint + '/teacher?id=' + teacherId + '&startingAt=' + startingAt.toISOString())
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public GetUncompletedScheduledClassesForTeacher(teacherId: number): Observable<ScheduledClassModel[]> {
    return this.http.get<ScheduledClassModel[]>(this.endpoint + '/teacher/uncompleted?id=' + teacherId)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
