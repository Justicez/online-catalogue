import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentSchedulePageComponent } from './student-schedule-page/student-schedule-page.component';
import { StudentInfoPageComponent } from './student-info-page/student-info-page.component';
import { StudentGradesPageComponent } from './student-grades-page/student-grades-page.component';
import { LoginGuard } from 'src/app/core/guards/log-in.guard';

const routes: Routes = [
  {
    path: 'student', component: StudentPageComponent,
    children: [
      { path: 'grades', component: StudentGradesPageComponent },
      { path: 'home', component: StudentInfoPageComponent },
      { path: 'schedule', component: StudentSchedulePageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
