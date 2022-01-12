import { ScheduledClassApiService } from './scheduled-class-api.service';
import { StudentApiService } from './student-api.service';
import { StudentGroupApiService } from './student-group-api.service';
import { TeacherApiService } from './teacher-api.service';
import { ClassTypeApiService } from './class-type-api.service';
import { CourseApiService } from './course-api.service';
import { SeminaryApiService } from './seminary-api.service';
import { AttendanceGradeApiService } from './attendance-grade-api.service';
import { LoginApiService } from './login-api.service';

export const httpServices: any[] = [
  ScheduledClassApiService,
  StudentApiService,
  StudentGroupApiService,
  TeacherApiService,
  ClassTypeApiService,
  CourseApiService,
  SeminaryApiService,
  AttendanceGradeApiService,
  LoginApiService
];
