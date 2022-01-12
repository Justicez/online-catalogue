import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CourseModel } from '../models/course.model';

@Injectable()
export class CourseApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/course';

  public createCourse(course: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(this.endpoint, course)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateCourse(course: CourseModel): Observable<CourseModel> {
    return this.http.put<CourseModel>(this.endpoint, course)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteCourse(id: number): Observable<CourseModel> {
    return this.http.delete<CourseModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
