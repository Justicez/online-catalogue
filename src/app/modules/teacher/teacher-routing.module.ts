import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ClassesContainerComponent } from './classes-container/classes-container.component';

const routes: Routes = [
  {
    path: 'teacher', component: TeacherPageComponent, children: [
      { path: 'home', component: MainPageComponent },
      { path: 'statistics', component: StatisticsPageComponent },
      { path: 'classes', component: ClassesContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
