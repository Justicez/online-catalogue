import { TeacherModel } from './teacher.model';
import { ClassTypeModel } from './class-type.model';
import { StudentGroupModel } from './student-group.model';

export class SeminaryModel {
  id?: number;
  name: string;
  teacherId: number;
  teacher?: TeacherModel;
  classTypeId: number;
  classType?: ClassTypeModel;
  studentGroupId: number;
  studentGroup?: StudentGroupModel;
}
