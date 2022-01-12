import { Component, OnInit } from '@angular/core';
import { ScheduledClassModel } from 'src/app/core/models/scheduled-class.model';
import { ScheduledClassApiService } from 'src/app/core/http/scheduled-class-api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [MessageService]
})
export class MainPageComponent implements OnInit {
  private teacherId = 3;
  public scheduledClasses: ScheduledClassModel[];
  public uncompletedclassList: ScheduledClassModel[];

  public showAtt = false;
  public selectedScheduledClassId: number;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private scheduledClassApiService: ScheduledClassApiService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.teacherId = +localStorage.getItem('id');
    this.fetchData();
  }

  public onRowClick(course: ScheduledClassModel): void {
    this.selectedScheduledClassId = course.id;
    this.showAtt = true;
  }

  public onSave(): void {
    this.showAtt = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Attendance submitted!' });
    this.fetchData();
  }

  private fetchData(): void {
    this.scheduledClassApiService.GetScheduledClassesForTeacher(this.teacherId, new Date(Date.now()))
      .subscribe(resp => this.scheduledClasses = resp);
    this.scheduledClassApiService.GetUncompletedScheduledClassesForTeacher(this.teacherId)
      .subscribe(resp => this.uncompletedclassList = resp);
  }

}
