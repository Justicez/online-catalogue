import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
