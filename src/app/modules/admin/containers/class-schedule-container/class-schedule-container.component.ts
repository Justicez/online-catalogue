import { Component, OnInit } from '@angular/core';
import { CourseApiService } from 'src/app/core/http/course-api.service';
import { SeminaryApiService } from 'src/app/core/http/seminary-api.service';
import { CourseModel } from 'src/app/core/models/course.model';
import { SeminaryModel } from 'src/app/core/models/seminary.model';
import { ScheduledClassModel } from 'src/app/core/models/scheduled-class.model';
import { ScheduledClassApiService } from 'src/app/core/http/scheduled-class-api.service';

@Component({
  selector: 'app-class-schedule-container',
  templateUrl: './class-schedule-container.component.html',
  styleUrls: ['./class-schedule-container.component.scss']
})
export class ClassScheduleContainerComponent implements OnInit {

  public courseList: CourseModel[];
  public seminaryList: SeminaryModel[];
  public scheduldedClassesList: ScheduledClassModel[];

  public loading = true;

  cols = [
    { field: 'classType', header: 'Class Type' },
    { field: 'class', header: 'Class Name' },
    { field: 'teacher', header: 'Teacher' },
    { field: 'date', header: 'Date' },
    { field: 'isExam', header: 'Is Exam' },
    { field: 'studentGroups', header: 'Student Groups' },
    { field: 'actions', header: 'Actions' },
  ];

  constructor(
    private courseApiService: CourseApiService,
    private seminaryApiService: SeminaryApiService,
    private scheduledClassApiService: ScheduledClassApiService,
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  public onSave(value: ScheduledClassModel): void {
    if (value.isExam === null) { value.isExam = false; }
    value.courseId = value.course?.id;
    value.seminaryId = value.seminary?.id;
    this.scheduledClassApiService.createScheduledClass(value).subscribe(() => this.fetchData());
  }

  public onDelete(value: number): void {
    this.scheduledClassApiService.deleteScheduledClass(value).subscribe(() => this.fetchData());
  }

  private fetchData(): void {
    this.scheduledClassApiService.GetAllScheduledClasses().subscribe(resp => { this.scheduldedClassesList = resp; this.loading = false; });
    this.courseApiService.getAllCourses().subscribe(resp => this.courseList = resp);
    this.seminaryApiService.getAllSeminaries().subscribe(resp => this.seminaryList = resp);
  }

}
