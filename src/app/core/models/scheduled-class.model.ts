import { CourseModel } from './course.model';
import { SeminaryModel } from './seminary.model';
import { ClassTypeModel } from './class-type.model';

export class ScheduledClassModel {
  id: number;
  recurrenceOccurence: number;
  recurrenceTimes: number;
  isExam: boolean;
  date: Date;
  courseId?: number;
  course?: CourseModel;
  seminaryId?: number;
  seminary: SeminaryModel;
}
