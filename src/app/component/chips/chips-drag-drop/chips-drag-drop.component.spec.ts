import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsDragDropComponent } from './chips-drag-drop.component';

describe('ChipsDragDropComponent', () => {
  let component: ChipsDragDropComponent;
  let fixture: ComponentFixture<ChipsDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
