import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { InputPrefixSuffixComponent } from './input-prefix-suffix.component';

describe('InputPrefixSuffixComponent', () => {
  let component: InputPrefixSuffixComponent;
  let fixture: ComponentFixture<InputPrefixSuffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputPrefixSuffixComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrefixSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
