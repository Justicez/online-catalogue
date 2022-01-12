import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPlanificationContainerComponent } from './class-planification-container.component';

describe('ClassPlanificationContainerComponent', () => {
  let component: ClassPlanificationContainerComponent;
  let fixture: ComponentFixture<ClassPlanificationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassPlanificationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPlanificationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
