import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentGroupApiService } from 'src/app/core/http/student-group-api.service';
import { EditStudentGroupModel, EditStudentModel } from 'src/app/core/models/edit-student-group.model';
import { AttendanceModel } from 'src/app/core/models/attendance.model';
import { AttendanceGradeApiService } from 'src/app/core/http/attendance-grade-api.service';

@Component({
  selector: 'app-edit-class-page',
  templateUrl: './edit-class-page.component.html',
  styleUrls: ['./edit-class-page.component.scss']
})
export class EditUncompletedClassPageComponent implements OnInit {

  @Input() set id(id: number) {
    if (id !== undefined) {
      this.scheduledClassId = id;
      this.fetchData();
    }
  }
  @Output() save = new EventEmitter<any>();
  public scheduledClassId: number;
  public studentGroups: EditStudentGroupModel[];

  constructor(
    private studentGroupApiService: StudentGroupApiService,
    private attendanceGradeApiService: AttendanceGradeApiService
  ) { }

  ngOnInit(): void {
    if (this.scheduledClassId !== undefined) {
      this.fetchData();
    }
  }

  public onSave(): void {
    const request = [];
    this.studentGroups.forEach(group => {
      group.students.forEach(student => {
        const newValue: AttendanceModel = {
          grade: student.grade,
          hasAttended: student.hasAttended,
          scheduledClassId: this.scheduledClassId,
          studentId: student.id,
        };
        request.push(newValue);
      });
    });
    this.attendanceGradeApiService.createAttendance(request).subscribe(() => { this.save.emit(); });
  }

  private fetchData(): void {
    this.studentGroupApiService.getStudentGroupByScheduledClassId(this.scheduledClassId).subscribe(resp => {
      this.studentGroups = [];
      resp.forEach(item => {
        const studs = [];
        item.students.forEach(stud => {
          const newStud: EditStudentModel = {
            id: stud.id,
            fullName: stud.firstName + ' ' + stud.fatherName.charAt(0) + '. ' + stud.lastName,
            grade: null,
            hasAttended: false
          };
          studs.push(newStud);
        });
        const value: EditStudentGroupModel = {
          id: item.id,
          name: item.name,
          year: item.year,
          students: studs
        };
        this.studentGroups.push(value);
      });
    });
  }
}
