import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { TeacherModel } from 'src/app/core/models/teacher.model';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  @Input() set teacher(teacher: TeacherModel) {
    if (teacher !== undefined) {
      this.teacherForm.patchValue(teacher);
    }
  }
  @Input() buttonText = 'Add Teacher';
  @Output() save: EventEmitter<TeacherModel> = new EventEmitter<TeacherModel>();

  theTeacher = new TeacherModel();
  teacherForm = new FormGroup({
    id: new FormControl(
      this.theTeacher.id,
    ),
    firstName: new FormControl(
      this.theTeacher.firstName,
      [Validators.required]
    ),
    lastName: new FormControl(
      this.theTeacher.lastName,
      [Validators.required]
    ),
    email: new FormControl(
      this.theTeacher.email,
      [Validators.email]
    ),
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    return this.teacherForm.valid;
  }

  public onSave(): void {
    this.save.emit(this.theTeacher);
    this.teacherForm.reset();
  }

  private onChanges(): void {
    this.teacherForm.valueChanges
      .subscribe(formValue => {
        this.theTeacher = cloneDeep(formValue);
      });
  }
}
