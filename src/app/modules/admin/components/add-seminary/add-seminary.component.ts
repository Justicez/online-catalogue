import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SeminaryModel } from 'src/app/core/models/seminary.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { StudentGroupModel } from 'src/app/core/models/student-group.model';
import { TeacherModel } from 'src/app/core/models/teacher.model';
import { ClassTypeModel } from 'src/app/core/models/class-type.model';

@Component({
  selector: 'app-add-seminary',
  templateUrl: './add-seminary.component.html',
  styleUrls: ['./add-seminary.component.scss']
})
export class AddSeminaryComponent implements OnInit {

  @Input() studentGroupList: StudentGroupModel[];
  @Input() teachers: TeacherModel[];
  @Input() classTypes: ClassTypeModel[];
  @Output() save: EventEmitter<SeminaryModel> = new EventEmitter<SeminaryModel>();

  theSeminary = new SeminaryModel();
  seminaryForm = new FormGroup({
    id: new FormControl(
      this.theSeminary.id,
    ),
    name: new FormControl(
      this.theSeminary.name,
      [Validators.required]
    ),
    teacher: new FormControl(
      this.theSeminary.teacherId,
      [Validators.required]
    ),
    classType: new FormControl(
      this.theSeminary.classTypeId,
      [Validators.required]
    ),
    studentGroup: new FormControl(
      this.theSeminary.studentGroupId,
    )
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    return this.seminaryForm.valid;
  }

  public onSave(): void {
    this.save.emit(this.theSeminary);
    this.seminaryForm.reset();
  }

  private onChanges(): void {
    this.seminaryForm.valueChanges
      .subscribe(formValue => {
        this.theSeminary = cloneDeep(formValue);
      });
  }
}
