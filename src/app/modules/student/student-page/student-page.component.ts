import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  headerItems = [
    {
      label: 'Home',
      url: '/student/home'
    },
    {
      label: 'Grades & Attendance',
      url: '/student/grades'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
