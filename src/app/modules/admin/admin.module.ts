import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgModule } from 'src/app/primeng.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddStudentGroupComponent } from './components/add-student-group/add-student-group.component';
import { MemberContainerComponent } from './containers/member-container/member-container.component';
import { StudentGroupContainerComponent } from './containers/student-group-container/student-group-container.component';
import { AddClassTypeComponent } from './components/add-class-type/add-class-type.component';
import { AddScheduledClassComponent } from './components/add-scheduled-class/add-scheduled-class.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddSeminaryComponent } from './components/add-seminary/add-seminary.component';
import { ClassPlanificationContainerComponent } from './containers/class-planification-container/class-planification-container.component';
import { ClassScheduleContainerComponent } from './containers/class-schedule-container/class-schedule-container.component';
import { MySharedModule } from 'src/app/shared/shared.module';

const components = [
  AddStudentComponent,
  AddStudentGroupComponent,
  AddClassTypeComponent,
  AddScheduledClassComponent,
  AddTeacherComponent,
  AddCourseComponent,
  AddSeminaryComponent,
];

const containers = [
  MemberContainerComponent,
  StudentGroupContainerComponent,
  ClassPlanificationContainerComponent,
  ClassScheduleContainerComponent
];

const pages = [
  AdminPageComponent,
];

@NgModule({
  declarations: [components, ...containers, ...pages],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgModule,
    MySharedModule,
  ],
  exports: [components, ...containers, ...pages],
  providers: []
})
export class AdminModule { }
