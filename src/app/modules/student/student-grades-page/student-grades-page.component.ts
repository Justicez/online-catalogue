import { Component, OnInit } from '@angular/core';
import { StudentGradeModel } from 'src/app/core/models/student-grade.model';
import { StudentApiService } from 'src/app/core/http/student-api.service';

@Component({
  selector: 'app-student-grades-page',
  templateUrl: './student-grades-page.component.html',
  styleUrls: ['./student-grades-page.component.scss']
})
export class StudentGradesPageComponent implements OnInit {

  constructor(private studentApiService: StudentApiService) { }
  public studentId: number;
  public studentGrades: StudentGradeModel[];

  ngOnInit(): void {
    this.studentId = +localStorage.getItem('id');
    this.studentApiService.getStudentGrades(this.studentId).subscribe(resp => { this.studentGrades = resp; });
  }

}
