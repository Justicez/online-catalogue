import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StudentModel } from 'src/app/core/models/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  @Input() set student(student: StudentModel) {
    if (student !== undefined) {
      this.studentForm.patchValue(student);
    }
  }
  @Input() buttonText = 'Add Student';
  @Output() save: EventEmitter<StudentModel> = new EventEmitter<StudentModel>();


  theStudent = new StudentModel();
  studentForm = new FormGroup({
    id: new FormControl(
      this.theStudent.id,
    ),
    firstName: new FormControl(
      this.theStudent.firstName,
      [Validators.required]
    ),
    lastName: new FormControl(
      this.theStudent.lastName,
      [Validators.required]
    ),
    email: new FormControl(
      this.theStudent.email,
      [Validators.required, Validators.email]
    ),
    adress: new FormControl(
      this.theStudent.adress,
      [Validators.required]
    ),
    cnp: new FormControl(
      this.theStudent.cNP,
      [Validators.required]
    ),
    phoneNumber: new FormControl(
      this.theStudent.phoneNumber,
      [Validators.required]
    ),
    fatherName: new FormControl(
      this.theStudent.fatherName,
      [Validators.required]
    ),
    motherName: new FormControl(
      this.theStudent.motherName,
      [Validators.required]
    )
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    return this.studentForm.valid;
  }

  public onSave(): void {
    this.save.emit(this.theStudent);
    this.studentForm.reset();
  }

  private onChanges(): void {
    this.studentForm.valueChanges
      .subscribe(formValue => {
        this.theStudent = cloneDeep(formValue);
      });
  }
}
