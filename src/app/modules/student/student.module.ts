import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/primeng.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentGradesPageComponent } from './student-grades-page/student-grades-page.component';
import { StudentSchedulePageComponent } from './student-schedule-page/student-schedule-page.component';
import { StudentInfoPageComponent } from './student-info-page/student-info-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { MySharedModule } from 'src/app/shared/shared.module';

const components = [StudentPageComponent, StudentGradesPageComponent, StudentSchedulePageComponent, StudentInfoPageComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeNgModule,
    MySharedModule,
    CoreModule
  ],
  exports: components,
  providers: []
})
export class StudentModule { }
