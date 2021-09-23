import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableConfig } from '../../model/interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'falcon-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() matTableConfig: MatTableConfig;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Input() displayedColumns: string[];
  @Output() editRowEvent = new EventEmitter<any>();
  @Output() deleteRowEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    const cols = this.matTableConfig.columns.map(c => c.columnDef);
    if (this.displayedColumns !== undefined)
      this.displayedColumns.unshift(...cols);
    else
      this.displayedColumns = cols;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.matTableConfig.dataSource = new MatTableDataSource(this.matTableConfig.dataSource);
      this.matTableConfig.dataSource.paginator = this.paginator;
      this.matTableConfig.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableConfig.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.matTableConfig.dataSource.paginator) {
      this.matTableConfig.dataSource.paginator.firstPage();
    }
  }

  public page(e: any) {
    this.pageEvent.emit(e);
  }

  public editRow($item: any) {
    this.editRowEvent.next($item);
  }

  public deleteRow($item: any) {
    this.deleteRowEvent.next($item);
  }

}
