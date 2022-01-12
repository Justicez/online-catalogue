export class StudentGradeModel {
  id: number;
  classType: string;
  seminary: ClassGradeModel;
  course: ClassGradeModel;
}

export class ClassGradeModel {
  id: number;
  className: string;
  grades: Array<number>;
  finalExamGrade?: number;
  finalGrade?: number;
  totalAttendances: number;
  attendances: number;
}
