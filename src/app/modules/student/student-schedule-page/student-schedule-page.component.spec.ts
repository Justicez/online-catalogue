import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchedulePageComponent } from './student-schedule-page.component';

describe('StudentSchedulePageComponent', () => {
  let component: StudentSchedulePageComponent;
  let fixture: ComponentFixture<StudentSchedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSchedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
