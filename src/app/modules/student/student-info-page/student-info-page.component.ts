import { Component, OnInit } from '@angular/core';
import { StudentApiService } from 'src/app/core/http/student-api.service';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from 'src/app/core/models/student.model';
import { ScheduledClassApiService } from 'src/app/core/http/scheduled-class-api.service';
import { ScheduledClassModel } from 'src/app/core/models/scheduled-class.model';

@Component({
  selector: 'app-student-info-page',
  templateUrl: './student-info-page.component.html',
  styleUrls: ['./student-info-page.component.scss']
})
export class StudentInfoPageComponent implements OnInit {

  constructor(
    private studentApiService: StudentApiService,
    private scheduledClassApiService: ScheduledClassApiService) { }

  public currentStudent: StudentModel;
  public classList: ScheduledClassModel[];

  private studentId: number;

  ngOnInit(): void {
    this.studentId = +localStorage.getItem('id');
    this.studentApiService.getStudent(this.studentId).subscribe(resp => this.currentStudent = resp);
    this.scheduledClassApiService.GetScheduledClassesForStudent(this.studentId).subscribe(resp => this.classList = resp);
  }


}
