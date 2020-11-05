import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioHtmlComponent } from './radio-html.component';

describe('RadioHtmlComponent', () => {
  let component: RadioHtmlComponent;
  let fixture: ComponentFixture<RadioHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
