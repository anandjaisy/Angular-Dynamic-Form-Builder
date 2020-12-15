import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaginationComponent } from './app-pagination.component';

describe('PaginationComponent', () => {
  let component: AppPaginationComponent;
  let fixture: ComponentFixture<AppPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
