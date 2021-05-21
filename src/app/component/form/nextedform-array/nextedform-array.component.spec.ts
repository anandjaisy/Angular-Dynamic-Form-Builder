import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextedformArrayComponent } from './nextedform-array.component';

describe('NextedformArrayComponent', () => {
  let component: NextedformArrayComponent;
  let fixture: ComponentFixture<NextedformArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextedformArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextedformArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
