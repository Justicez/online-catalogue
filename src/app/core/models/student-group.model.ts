import { StudentModel } from './student.model';

export class StudentGroupModel {
  id: number;
  name: string;
  year: number;
  students: Array<StudentModel>;
  studentIds: Array<number>;

}
