import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNextedChildComponent } from './form-nexted-child.component';

describe('FormNextedChildComponent', () => {
  let component: FormNextedChildComponent;
  let fixture: ComponentFixture<FormNextedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNextedChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNextedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
