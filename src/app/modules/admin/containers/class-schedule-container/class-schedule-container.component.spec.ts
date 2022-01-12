import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleContainerComponent } from './class-schedule-container.component';

describe('ClassScheduleContainerComponent', () => {
  let component: ClassScheduleContainerComponent;
  let fixture: ComponentFixture<ClassScheduleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassScheduleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassScheduleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
