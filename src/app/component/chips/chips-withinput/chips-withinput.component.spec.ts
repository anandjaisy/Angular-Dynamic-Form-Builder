import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsWithinputComponent } from './chips-withinput.component';

describe('ChipsWithinputComponent', () => {
  let component: ChipsWithinputComponent;
  let fixture: ComponentFixture<ChipsWithinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsWithinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsWithinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
