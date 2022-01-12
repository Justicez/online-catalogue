import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ScheduledClassModel } from 'src/app/core/models/scheduled-class.model';
import { CourseModel } from 'src/app/core/models/course.model';
import { SeminaryModel } from 'src/app/core/models/seminary.model';

@Component({
  selector: 'app-add-scheduled-class',
  templateUrl: './add-scheduled-class.component.html',
  styleUrls: ['./add-scheduled-class.component.scss']
})
export class AddScheduledClassComponent implements OnInit {
  @Input() set scheduledClass(value: ScheduledClassModel) {
    if (value !== undefined) {
      this.scheduledClassForm.patchValue(value);
    }
  }
  @Input() courses: CourseModel[];
  @Input() seminaries: SeminaryModel[];
  @Output() save: EventEmitter<ScheduledClassModel> = new EventEmitter<ScheduledClassModel>();

  theScheduledClass = new ScheduledClassModel();
  scheduledClassForm = new FormGroup({
    id: new FormControl(
      this.theScheduledClass.id,
    ),
    date: new FormControl(
      this.theScheduledClass.date,
      [Validators.required]
    ),
    isExam: new FormControl(
      this.theScheduledClass.isExam,
    ),
    seminary: new FormControl(
      this.theScheduledClass.seminary,
      [Validators.required]
    ),
    course: new FormControl(
      this.theScheduledClass.course,
      [Validators.required]
    ),
    recurrenceOccurence: new FormControl(
      this.theScheduledClass.recurrenceOccurence,
    ),
    recurrenceTimes: new FormControl(
      this.theScheduledClass.recurrenceTimes,
    )
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    if (this.scheduledClassForm.controls.date.valid === false ||
      (this.scheduledClassForm.controls.seminary.valid === true && this.scheduledClassForm.controls.course.valid === true) ||
      (this.scheduledClassForm.controls.seminary.valid === false && this.scheduledClassForm.controls.course.valid === false)
    ) {
      return false;
    }
    else {
      return true;
    }
  }

  public onSave(): void {
    this.save.emit(this.theScheduledClass);
    this.scheduledClassForm.reset();
  }

  private onChanges(): void {
    this.scheduledClassForm.valueChanges
      .subscribe(formValue => {
        this.theScheduledClass = cloneDeep(formValue);
      });
  }
}
