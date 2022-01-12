import { Component, OnInit } from '@angular/core';
import { StudentApiService } from 'src/app/core/http/student-api.service';
import { StudentModel } from 'src/app/core/models/student.model';
import { MessageService } from 'primeng/api';
import { TeacherApiService } from 'src/app/core/http/teacher-api.service';
import { TeacherModel } from 'src/app/core/models/teacher.model';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-member-container',
  templateUrl: './member-container.component.html',
  styleUrls: ['./member-container.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class MemberContainerComponent implements OnInit {

  public studentList: StudentModel[];
  public teacherList: TeacherModel[];
  public selectedStudent: StudentModel;
  public selectedTeacher: TeacherModel;
  public displayAddTeacher = false;
  public displayEditTeacher = false;
  public displayAddStudent = false;
  public displayEditStudent = false;
  public loading = true;

  colsS = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'motherName', header: 'Mother Name' },
    { field: 'fatherName', header: 'Father Name' },
    { field: 'cnp', header: 'CNP' },
    { field: 'adress', header: 'Adress' },
    { field: 'email', header: 'Email' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'actions', header: 'Actions' },
  ];

  colsT = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email' },
    { field: 'actions', header: 'Actions' },
  ];

  constructor(
    private studentApiService: StudentApiService,
    private messageService: MessageService,
    private teacherApiService: TeacherApiService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  public onSave(student: StudentModel): void {
    this.studentApiService.createStudent(student).subscribe(resp => {
      this.fetchData();
      this.displayAddStudent = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student added!' });
    });
  }

  public onSaveTeacher(teacher: TeacherModel): void {
    this.teacherApiService.createTeacher(teacher).subscribe(resp => {
      this.fetchData();
      this.displayAddTeacher = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Teacher added!' });
    });
  }

  public onUpdate(student: StudentModel): void {
    this.studentApiService.updateStudent(student).subscribe(resp => {
      this.fetchData();
      this.displayEditStudent = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student edited!' });
    });
  }

  public onUpdateTeacher(teacher: TeacherModel): void {
    this.teacherApiService.updateTeacher(teacher).subscribe(resp => {
      this.fetchData();
      this.displayEditTeacher = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Teacher edited!' });
    });
  }

  public onDeleteStudent(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?<br/> Deleting a Student means deleting all his Grades and Attendances too! ',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.studentApiService.deleteStudent(id).subscribe(resp => {
          this.fetchData();
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Student deleted!' });
        });
      },
      reject: () => {
      }
    });
  }

  public onDeleteTeacher(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record? <br/>This means any Classes or Seminaries this teacher has been assigned to will be left without a teacher!',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.teacherApiService.deleteTeacher(id).subscribe(resp => {
          this.fetchData();
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Teacher deleted!' });
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

  public showAddTeacherDialog(): void {
    this.displayAddStudent = false;
    this.displayEditStudent = false;
    this.displayAddTeacher = true;
    this.displayEditTeacher = false;
  }

  public showEditStudentDialog(student: StudentModel): void {
    this.selectedStudent = student;
    this.displayAddStudent = false;
    this.displayEditStudent = true;
    this.displayAddTeacher = false;
    this.displayEditTeacher = false;
  }

  public showEditTeacherDialog(teacher: TeacherModel): void {
    this.selectedTeacher = teacher;
    this.displayAddStudent = false;
    this.displayEditStudent = false;
    this.displayAddTeacher = false;
    this.displayEditTeacher = true;
  }

  private fetchData(): void {
    this.studentApiService.getAllStudents().subscribe(resp => { this.studentList = resp; this.loading = false; });
    this.teacherApiService.getAllTeachers().subscribe(resp => { this.teacherList = resp; this.loading = false; });
  }

}
