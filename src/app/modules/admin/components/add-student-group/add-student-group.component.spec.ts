import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentGroupComponent } from './add-student-group.component';

describe('AddStudentGroupComponent', () => {
  let component: AddStudentGroupComponent;
  let fixture: ComponentFixture<AddStudentGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
