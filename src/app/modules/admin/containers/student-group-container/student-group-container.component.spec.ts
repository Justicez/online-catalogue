import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupContainerComponent } from './student-group-container.component';

describe('StudentGroupContainerComponent', () => {
  let component: StudentGroupContainerComponent;
  let fixture: ComponentFixture<StudentGroupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
