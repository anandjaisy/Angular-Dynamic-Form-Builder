import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleHtmlComponent } from './button-toggle-html.component';

describe('ButtonToggleHtmlComponent', () => {
  let component: ButtonToggleHtmlComponent;
  let fixture: ComponentFixture<ButtonToggleHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonToggleHtmlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
