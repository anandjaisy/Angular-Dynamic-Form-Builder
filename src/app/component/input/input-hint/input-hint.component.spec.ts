import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHintComponent } from './input-hint.component';

describe('InputHintComponent', () => {
  let component: InputHintComponent;
  let fixture: ComponentFixture<InputHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
