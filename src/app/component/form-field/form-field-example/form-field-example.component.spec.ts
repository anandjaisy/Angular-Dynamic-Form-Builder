import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldExampleComponent } from './form-field-example.component';

describe('FormFieldExampleComponent', () => {
  let component: FormFieldExampleComponent;
  let fixture: ComponentFixture<FormFieldExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
