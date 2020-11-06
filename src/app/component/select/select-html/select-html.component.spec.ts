import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHtmlComponent } from './select-html.component';

describe('SelectHtmlComponent', () => {
  let component: SelectHtmlComponent;
  let fixture: ComponentFixture<SelectHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
