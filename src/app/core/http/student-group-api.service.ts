import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StudentGroupModel } from '../models/student-group.model';
import { StudentInfo } from 'src/app/modules/teacher/classes-container/classes-container.component';

@Injectable()
export class StudentGroupApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/StudentGroup';

  public createStudentGroup(studentGroup: StudentGroupModel): Observable<StudentGroupModel> {
    return this.http.post<StudentGroupModel>(this.endpoint, studentGroup)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateStudentGroup(studentGroup: StudentGroupModel): Observable<StudentGroupModel> {
    return this.http.put<StudentGroupModel>(this.endpoint, studentGroup)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteStudentGroup(id: number): Observable<StudentGroupModel> {
    return this.http.delete<StudentGroupModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getStudentGroup(studentGroup: StudentGroupModel): Observable<StudentGroupModel> {
    return this.http.get<StudentGroupModel>(this.endpoint + studentGroup.id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getStudentGroupByScheduledClassId(scheduledClassId: number): Observable<StudentGroupModel[]> {
    return this.http.get<StudentGroupModel[]>(this.endpoint + '/scheduledclass?id=' + scheduledClassId)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getAllStudentGroups(): Observable<StudentGroupModel[]> {
    return this.http.get<StudentGroupModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public GetStudentGroupClassGrades(studentGroupId: number, classId: number, isCourse: boolean): Observable<StudentInfo[]> {
    return this.http.get<StudentInfo[]>
      (this.endpoint + '/grades?studentGroupId=' + studentGroupId + '&classId=' + classId + '&isCourse=' + isCourse)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
