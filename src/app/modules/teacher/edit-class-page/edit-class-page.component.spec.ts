import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUncompletedClassPageComponent } from './edit-class-page.component';

describe('EditClassPageComponent', () => {
  let component: EditUncompletedClassPageComponent;
  let fixture: ComponentFixture<EditUncompletedClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditUncompletedClassPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUncompletedClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
