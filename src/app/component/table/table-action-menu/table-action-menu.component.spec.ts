import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionMenuComponent } from './table-action-menu.component';

describe('TableActionMenuComponent', () => {
  let component: TableActionMenuComponent;
  let fixture: ComponentFixture<TableActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableActionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
