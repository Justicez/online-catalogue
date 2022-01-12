import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeminaryComponent } from './add-seminary.component';

describe('AddSeminaryComponent', () => {
  let component: AddSeminaryComponent;
  let fixture: ComponentFixture<AddSeminaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeminaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeminaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
