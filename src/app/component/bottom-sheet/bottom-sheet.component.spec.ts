import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ExampleBottomSheetComponent } from './bottom-sheet.component';

describe('BottomSheetComponent', () => {
  let component: ExampleBottomSheetComponent;
  let fixture: ComponentFixture<ExampleBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleBottomSheetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
