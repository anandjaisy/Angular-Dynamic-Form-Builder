import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TestReactiveControlsComponent } from './test-reactive-controls.component';

describe('TestReactiveControlsComponent', () => {
  let component: TestReactiveControlsComponent;
  let fixture: ComponentFixture<TestReactiveControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestReactiveControlsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReactiveControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
