import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudentModel } from '../models/student.model';
import { StudentGradeModel } from '../models/student-grade.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentApiService {
  constructor(private http: HttpClient) { }

  endpoint = environment.api_url + '/student/';

  public createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.endpoint, student)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(this.endpoint, student)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public deleteStudent(id: number): Observable<StudentModel> {
    return this.http.delete<StudentModel>(this.endpoint + '?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getStudent(id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.endpoint + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(this.endpoint)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
  public getStudentGrades(id: number): Observable<StudentGradeModel[]> {
    return this.http.get<StudentGradeModel[]>(this.endpoint + 'grades?id=' + id)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
