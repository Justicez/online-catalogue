import { StudentGroupModel } from './student-group.model';

export class TeacherClassModel {
  id: number;
  classType: string;
  seminary: TeacherClassInfoModel;
  course: TeacherClassInfoModel;
}

export class TeacherClassInfoModel {
  id: number;
  className: string;
  studentGroups: Array<StudentGroupModel>;
}

