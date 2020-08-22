import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { MatTable, MatTableConfig } from '../../view-models/interface';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'falcon-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() matTableConfig: MatTableConfig;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns : any;
  constructor() {
   }

  ngOnInit(): void {
    this.displayedColumns = this.matTableConfig.columns.map(c => c.columnDef);
    this.matTableConfig.dataSource = new MatTableDataSource(this.matTableConfig.dataSource);
    this.matTableConfig.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableConfig.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.matTableConfig.dataSource.paginator) {
      this.matTableConfig.dataSource.paginator.firstPage();
    }
  }

}
