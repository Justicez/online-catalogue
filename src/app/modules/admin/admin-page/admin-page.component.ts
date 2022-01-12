import { Component, OnInit } from '@angular/core';
import { StudentApiService } from 'src/app/core/http/student-api.service';
import { StudentGroupApiService } from 'src/app/core/http/student-group-api.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  headerItems = [
    {
      label: 'Members',
      url: '/admin/members'
    },
    {
      label: 'Student Groups',
      url: '/admin/student-groups'
    },
    {
      label: 'Class Planning',
      url: '/admin/class-planning'
    },
    {
      label: 'Class Schedules',
      url: '/admin/class-schedule'
    }
  ];

  ngOnInit(): void {
  }


}
