import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduledClassComponent } from './add-scheduled-class.component';

describe('AddScheduledClassComponent', () => {
  let component: AddScheduledClassComponent;
  let fixture: ComponentFixture<AddScheduledClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScheduledClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduledClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
