import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/primeng.module';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { EditUncompletedClassPageComponent } from './edit-class-page/edit-class-page.component';
import { MySharedModule } from 'src/app/shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ClassesContainerComponent } from './classes-container/classes-container.component';

const aModules = [
  BrowserModule,
];

const components = [
  TeacherPageComponent,
  EditUncompletedClassPageComponent,
  MainPageComponent,
  StatisticsPageComponent,
  ClassesContainerComponent];

@NgModule({
  declarations: components,
  imports: [
    ...aModules,
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    PrimeNgModule,
    MySharedModule,
  ],
  exports: components,
  providers: []
})
export class TeacherModule { }
