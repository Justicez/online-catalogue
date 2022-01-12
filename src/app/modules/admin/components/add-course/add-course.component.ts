import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { StudentGroupModel } from 'src/app/core/models/student-group.model';
import { ClassTypeModel } from 'src/app/core/models/class-type.model';
import { TeacherModel } from 'src/app/core/models/teacher.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  @Input() studentGroupList: StudentGroupModel[];
  @Input() teachers: TeacherModel[];
  @Input() classTypes: ClassTypeModel[];
  @Output() save: EventEmitter<CourseModel> = new EventEmitter<CourseModel>();

  theCourse = new CourseModel();
  courseForm = new FormGroup({
    id: new FormControl(
      this.theCourse.id,
    ),
    name: new FormControl(
      this.theCourse.name,
      [Validators.required]
    ),
    teacher: new FormControl(
      this.theCourse.teacher,
      [Validators.required]
    ),
    classType: new FormControl(
      this.theCourse.classType,
      [Validators.required]
    ),
    studentGroups: new FormControl(
      this.theCourse.studentGroups,
    )
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    return this.courseForm.valid;
  }

  public onSave(): void {
    this.save.emit(this.theCourse);
    this.courseForm.reset();
  }

  private onChanges(): void {
    this.courseForm.valueChanges
      .subscribe(formValue => {
        this.theCourse = cloneDeep(formValue);
      });
  }
}
