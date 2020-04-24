import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveControlsComponent } from './reactive-controls.component';

describe('ReactiveControlsComponent', () => {
  let component: ReactiveControlsComponent;
  let fixture: ComponentFixture<ReactiveControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
