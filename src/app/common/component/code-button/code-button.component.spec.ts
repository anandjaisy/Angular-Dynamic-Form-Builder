import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeButtonComponent } from './code-button.component';

describe('CodeButtonComponent', () => {
  let component: CodeButtonComponent;
  let fixture: ComponentFixture<CodeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
