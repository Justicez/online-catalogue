import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ClassTypeModel } from 'src/app/core/models/class-type.model';

@Component({
  selector: 'app-add-class-type',
  templateUrl: './add-class-type.component.html',
  styleUrls: ['./add-class-type.component.scss']
})
export class AddClassTypeComponent implements OnInit {
  @Output() save: EventEmitter<ClassTypeModel> = new EventEmitter<ClassTypeModel>();

  theClassType = new ClassTypeModel();
  classTypeForm = new FormGroup({
    id: new FormControl(
      this.theClassType.id,
    ),
    name: new FormControl(
      this.theClassType.name,
      [Validators.required]
    )
  });

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  public get isFormValid(): boolean {
    return this.classTypeForm.valid;
  }

  public onSave(): void {
    this.save.emit(this.theClassType);
    this.classTypeForm.reset();
  }

  private onChanges(): void {
    this.classTypeForm.valueChanges
      .subscribe(formValue => {
        this.theClassType = cloneDeep(formValue);
      });
  }
}
