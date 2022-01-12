import { ClassTypeModel } from './class-type.model';
import { TeacherModel } from './teacher.model';
import { StudentGroupModel } from './student-group.model';

export class CourseModel {
  id?: number;
  name: string;
  teacherid: number;
  teacher?: TeacherModel;
  classType?: ClassTypeModel;
  classTypeId: number;
  studentGroups?: Array<StudentGroupModel>;
  studentGroupids: Array<number>;
}
