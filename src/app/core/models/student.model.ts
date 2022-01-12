export class StudentModel {
  id: number;
  firstName: string;
  lastName: string;
  motherName: string;
  fatherName: string;
  cNP: string;
  adress: string;
  phoneNumber: string;
  email: string;
  studentGroupId: number;
  displayText: string;

  constructor() {
    this.displayText = this.firstName + ' ' + this.lastName;
  }
}
