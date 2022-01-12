export class EditStudentGroupModel {
  id: number;
  name: string;
  year: number;
  students: Array<EditStudentModel>;
}

export class EditStudentModel {
  id: number;
  fullName: string;
  hasAttended: boolean;
  grade?: number;
}
