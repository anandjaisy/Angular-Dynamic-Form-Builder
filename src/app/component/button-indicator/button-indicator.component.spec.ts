import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIndicatorComponent } from './button-indicator.component';

describe('ButtonIndicatorComponent', () => {
  let component: ButtonIndicatorComponent;
  let fixture: ComponentFixture<ButtonIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
