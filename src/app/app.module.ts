import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './primeng.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './modules/admin/admin.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { MySharedModule } from './shared/shared.module';

const aModules = [
  BrowserModule,
  BrowserAnimationsModule,
];

const customModules = [
  AppRoutingModule,
  PrimeNgModule,
  CoreModule,
  MySharedModule,
  StudentModule,
  TeacherModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...aModules,
    ...customModules,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
