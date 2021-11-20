import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from '../../../common/angularCodeTemplateViewModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatTableConfig,
  MatTable,
} from '../../../../../projects/falcon-core/src/lib/model/interface';
import { AngularCodeTemplate } from '../../../common/angularCodeTemplate';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table-action-menu',
  templateUrl: './table-action-menu.component.html',
  styleUrls: ['./table-action-menu.component.scss'],
})
export class TableActionMenuComponent implements OnInit {
  public displayedColumns = ['action'];
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  matTableConfig: MatTableConfig = {};
  columns: MatTable[] = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: any) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: any) => `${element.name}`,
      link: {
        routerLink: (element: any) => `${element.position}`,
        isLink: true,
      },
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: any) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: any) => `${element.symbol}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.matTableConfig.columns = this.columns;
    this.matTableConfig.filter = true;
    this.matTableConfig.paginationConfig = {
      pagination: true,
      pageSizeOptions: [10, 50, 100],
    };
    this.matTableConfig.dataSource = this.dataSource;
    this.matTableConfig.action = {
      isMenu: true,
      menu: [
        {
          text: 'Redial',
          isIcon: true,
          icon: { iconText: 'dialpad' },
          link: { routerLink: './dialpad' },
          disabled: false,
        },
        {
          text: 'Check voice mail',
          isIcon: true,
          icon: { iconText: 'voicemail' },
          link: { routerLink: './voicemail' },
          disabled: true,
        },
        {
          text: 'Disable alerts',
          isIcon: true,
          icon: { iconText: 'notifications_off', iconColor: 'warn' },
          link: { routerLink: './notification' },
          disabled: false,
        },
      ],
    };
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Table_ACTION_MENU_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Table_ACTION_MENU_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
  page($event) {
    this.matTableConfig.progressBar = true;
    console.log($event);
    this._snackBar.open(JSON.stringify($event), '', {
      duration: 5000,
    });

    setTimeout(() => {
      this.matTableConfig.progressBar = false;
    }, 1000);
  }

  tableActionRowEvent($event) {
    console.log('Event from parent edit');
    console.log($event);
  }
}
