import { Component, OnInit } from '@angular/core';
import { StudentGroupApiService } from 'src/app/core/http/student-group-api.service';
import { StudentGroupModel } from 'src/app/core/models/student-group.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { StudentApiService } from 'src/app/core/http/student-api.service';
import { StudentModel } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-student-group-container',
  templateUrl: './student-group-container.component.html',
  styleUrls: ['./student-group-container.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class StudentGroupContainerComponent implements OnInit {

  public studentGroupList: StudentGroupModel[];
  public studentList: StudentModel[];
  public selectedStudentGroup: StudentGroupModel;
  public displayAddStudent = false;
  public displayEditStudent = false;
  public loading = true;

  cols = [
    { field: 'name', header: 'Group Name' },
    { field: 'year', header: 'Group Year' },
    { field: 'member', header: 'Student Members' },
    { field: 'actions', header: 'Actions' },
  ];

  constructor(
    private studentApiService: StudentApiService,
    private studentGroupApiService: StudentGroupApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.fetchData();
    this.studentApiService.getAllStudents().subscribe(resp => {
      resp.forEach(student => {
        student.displayText = student.firstName + ' ' + student.lastName + ', ' + student.fatherName;
      });
      this.studentList = resp;
    });
  }

  public onSave(studentGroup: StudentGroupModel): void {
    studentGroup.year = +studentGroup.year;
    studentGroup.studentIds = studentGroup.students.map((student) => student.id);
    this.studentGroupApiService.createStudentGroup(studentGroup).subscribe(resp => {
      this.fetchData();
      this.displayAddStudent = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student Group Added!' });
    });
  }

  public onUpdate(studentGroup: StudentGroupModel): void {
    studentGroup.year = +studentGroup.year;
    studentGroup.studentIds = studentGroup.students.map((student) => student.id);
    this.studentGroupApiService.updateStudentGroup(studentGroup).subscribe(resp => {
      this.fetchData();
      this.displayEditStudent = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student Group Edited!' });
    });
  }

  public onDeleteStudent(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.studentGroupApiService.deleteStudentGroup(id).subscribe(resp => {
          this.fetchData();
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Student Group deleted!' });
        });
      },
      reject: () => {
      }
    });
  }

  public showAddStudentDialog(): void {
    this.displayAddStudent = true;
    this.displayEditStudent = false;
  }

  public showEditStudentDialog(studentGroup: StudentGroupModel): void {
    this.selectedStudentGroup = studentGroup;
    this.displayAddStudent = false;
    this.displayEditStudent = true;
  }

  private fetchData(): void {
    this.studentGroupApiService.getAllStudentGroups().subscribe(resp => {
      resp.forEach(group => {
        group.students.forEach(student => {
          student.displayText = student.firstName + ' ' + student.lastName + ', ' + student.fatherName;
        });
      });
      this.studentGroupList = resp;
      this.loading = false;
    });
  }
}
