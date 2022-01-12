import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeacherApiService } from 'src/app/core/http/teacher-api.service';
import { TeacherModel } from 'src/app/core/models/teacher.model';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./teacher-page.component.scss']
})
export class TeacherPageComponent implements OnInit {
  public currentTeacher: TeacherModel;

  private teacherId = 3;

  headerItems = [
    {
      label: 'Home',
      url: '/teacher/home'
    },
    {
      label: 'Statistics',
      url: '/teacher/statistics'
    },
    {
      label: 'Classes',
      url: '/teacher/classes'
    },
    {
      label: 'Info',
      url: '/teacher/info'
    }
  ];


  constructor(
    private teacherApiService: TeacherApiService
  ) { }

  ngOnInit(): void {
    this.teacherApiService.getTeacher(this.teacherId).subscribe(resp => this.currentTeacher = resp);
  }

}
