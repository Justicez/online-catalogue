import { Component, OnInit, Input } from '@angular/core';
import { TeacherApiService } from 'src/app/core/http/teacher-api.service';
import { TeacherClassModel, TeacherClassInfoModel } from 'src/app/core/models/teacher-class.model';
import { StudentGroupApiService } from 'src/app/core/http/student-group-api.service';

@Component({
  selector: 'app-classes-container',
  templateUrl: './classes-container.component.html',
  styleUrls: ['./classes-container.component.scss']
})
export class ClassesContainerComponent implements OnInit {

  private teacherId: number;
  public classList: TeacherClassModel[];
  public classStudents: StudentGrades[];

  constructor(
    private teacherApiService: TeacherApiService,
    private studentGroupApiService: StudentGroupApiService) { }

  ngOnInit(): void {
    this.teacherId = +localStorage.getItem('id');
    if (this.teacherId !== undefined) {
      this.fetchData();
    }
  }

  public onClassClick(value: TeacherClassInfoModel, isCourse: boolean): void {
    this.classStudents = [];
    value.studentGroups.forEach(group => {
      this.studentGroupApiService.GetStudentGroupClassGrades(group.id, value.id, isCourse).subscribe(resp => {
        const newObj: StudentGrades = {
          className: value.className,
          groupName: group.name,
          students: resp
        };
        this.classStudents.push(newObj);
      });
    });
  }

  private fetchData(): void {
    this.teacherApiService.getTeachersClasses(this.teacherId).subscribe(resp => { this.classList = resp; });
  }
}

export class StudentGrades {
  className: string;
  groupName: string;
  students: Array<StudentInfo>;
}

export class StudentInfo {
  fullName: string;
  attendance: number;
  totalAttendances: number;
  grades: Array<number>;
}

