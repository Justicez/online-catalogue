import { Component, OnInit } from '@angular/core';
import { ClassTypeApiService } from 'src/app/core/http/class-type-api.service';
import { CourseApiService } from 'src/app/core/http/course-api.service';
import { SeminaryApiService } from 'src/app/core/http/seminary-api.service';
import { ClassTypeModel } from 'src/app/core/models/class-type.model';
import { CourseModel } from 'src/app/core/models/course.model';
import { SeminaryModel } from 'src/app/core/models/seminary.model';
import { TeacherApiService } from 'src/app/core/http/teacher-api.service';
import { TeacherModel } from 'src/app/core/models/teacher.model';
import { StudentGroupApiService } from 'src/app/core/http/student-group-api.service';
import { StudentGroupModel } from 'src/app/core/models/student-group.model';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-class-planification-container',
  templateUrl: './class-planification-container.component.html',
  styleUrls: ['./class-planification-container.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ClassPlanificationContainerComponent implements OnInit {

  public classTypeList: ClassTypeModel[];
  public courseList: CourseModel[];
  public seminaryList: SeminaryModel[];
  public teacherList: TeacherModel[];
  public theStudentGroups: StudentGroupModel[];

  public loadingType = true;
  public loadingCourse = true;
  public loadingSeminary = true;

  constructor(
    private classTypeApiService: ClassTypeApiService,
    private courseApiService: CourseApiService,
    private seminaryApiService: SeminaryApiService,
    private teacherApiService: TeacherApiService,
    private studentGroupApiService: StudentGroupApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.fetchData();
    this.teacherApiService.getAllTeachers().subscribe(resp => this.teacherList = resp);
    this.studentGroupApiService.getAllStudentGroups().subscribe(resp => {
      this.theStudentGroups = resp;
    });
  }

  public onSaveClassType(classType: ClassTypeModel): void {
    this.classTypeApiService.createClassType(classType).subscribe(resp => {
      this.fetchData();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Class Type added!' });
    });
  }

  public onSaveCourse(course: CourseModel): void {
    const request: CourseModel = {
      name: course.name,
      classTypeId: course.classType.id,
      teacherid: course.teacher.id,
      studentGroupids: course.studentGroups.map(x => x.id)
    };
    this.courseApiService.createCourse(request).subscribe(resp => {
      this.fetchData();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course added!' });
    });
  }

  public onSaveSeminary(seminary: SeminaryModel): void {
    const request: SeminaryModel = {
      name: seminary.name,
      classTypeId: seminary.classType.id,
      teacherId: seminary.teacher.id,
      studentGroupId: seminary.studentGroup.id
    };
    this.seminaryApiService.createSeminary(request).subscribe(resp => {
      this.fetchData();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Seminary added!' });
    });
  }

  public onEditClassType(classType: ClassTypeModel): void {
    this.classTypeApiService.updateClassType(classType).subscribe(resp => this.fetchData());
  }

  public onEditCourse(course: CourseModel): void {
    this.courseApiService.updateCourse(course).subscribe(resp => this.fetchData());
  }

  public onEditSeminary(seminary: SeminaryModel): void {
    this.seminaryApiService.updateSeminary(seminary).subscribe(resp => this.fetchData());
  }

  public onDeleteClassType(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.classTypeApiService.deleteClassType(id).subscribe(resp => {
          this.fetchData();
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Class Type deleted!' });
        },
          err => {
            this.messageService.add({ severity: 'error', summary: 'FAILED', detail: 'Please DELETE COURSES and SEMINARIES assigned to this CLASS TYPE!' });
          });
      },
      reject: () => {
      }
    });
  }

  public onDeleteCourse(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?<br/> This action will all attendances and grades for each student in this class!',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.courseApiService.deleteCourse(id).subscribe(resp => {
          this.fetchData();
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Course deleted!' });
        });
      },
      reject: () => {
      }
    });
  }

  public onDeleteSeminary(id: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record? This action will all attendances and grades for each student in this class!',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.seminaryApiService.deleteSeminary(id).subscribe(resp => {
          this.fetchData();
          this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Seminary deleted!' });
        });
      },
      reject: () => {
      }
    });
  }

  private fetchData(): void {
    this.classTypeApiService.getAllClassTypes().subscribe(resp => { this.classTypeList = resp; this.loadingType = false; });
    this.courseApiService.getAllCourses().subscribe(resp => { this.courseList = resp; this.loadingCourse = false; });
    this.seminaryApiService.getAllSeminaries().subscribe(resp => { this.seminaryList = resp; this.loadingSeminary = false; });
  }
}
