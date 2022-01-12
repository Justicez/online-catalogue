import { Component, OnInit } from '@angular/core';
import { ScheduledClassApiService } from 'src/app/core/http/scheduled-class-api.service';

@Component({
  selector: 'app-student-schedule-page',
  templateUrl: './student-schedule-page.component.html',
  styleUrls: ['./student-schedule-page.component.scss']
})
export class StudentSchedulePageComponent implements OnInit {

  public options: any;
  public events: any;

  constructor(private scheduledClassApiService: ScheduledClassApiService) { }

  ngOnInit() {
    this.scheduledClassApiService.GetScheduledClassesForStudent(1).subscribe(resp => this.events = resp);
  }

}
