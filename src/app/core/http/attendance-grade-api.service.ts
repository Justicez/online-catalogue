import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AttendanceModel } from '../models/attendance.model';

@Injectable()
export class AttendanceGradeApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/attendance';

  public createAttendance(course: AttendanceModel[]): Observable<AttendanceModel> {
    const request = {
      attendances: course
    }
    return this.http.post<AttendanceModel>(this.endpoint, request)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateAttendance(course: AttendanceModel): Observable<AttendanceModel> {
    return this.http.put<AttendanceModel>(this.endpoint, course)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteAttendance(id: number): Observable<AttendanceModel> {
    return this.http.delete<AttendanceModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

}
