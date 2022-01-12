import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StudentGroupModel } from 'src/app/core/models/student-group.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { StudentModel } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-add-student-group',
  templateUrl: './add-student-group.component.html',
  styleUrls: ['./add-student-group.component.scss']
})
export class AddStudentGroupComponent implements OnInit {
  @Input() set studentGroup(student: StudentGroupModel) {
    if (student !== undefined) {
      this.studentGroupForm.patchValue(student);
    }
  }
  @Input() buttonText = 'Add Student Group';
  @Input() students: StudentModel[];
  @Output() save: EventEmitter<StudentGroupModel> = new EventEmitter<StudentGroupModel>();

  selectedStudent: StudentModel;

  theStudentGroup = new StudentGroupModel();
  studentGroupForm = new FormGroup({
    id: new FormControl(
      this.theStudentGroup.id,
    ),
    name: new FormControl(
      this.theStudentGroup.name,
      [Validators.required]
    ),
    year: new FormControl(
      this.theStudentGroup.year,
      [Validators.required]
    ),
    students: new FormControl(
      this.theStudentGroup.students,
    )
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    return this.studentGroupForm.valid;
  }

  public onSave(): void {
    this.save.emit(this.theStudentGroup);
    this.studentGroupForm.reset();
  }

  private onChanges(): void {
    this.studentGroupForm.valueChanges
      .subscribe(formValue => {
        this.theStudentGroup = cloneDeep(formValue);
      });
  }
}
