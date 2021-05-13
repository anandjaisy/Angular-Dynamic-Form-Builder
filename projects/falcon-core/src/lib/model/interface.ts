import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AutoCompleteComponent } from '../component/auto-complete/auto-complete.component';
import { ButtonToggleComponent } from '../component/button-toggle/button-toggle.component';
import { ButtonComponent } from '../component/button/button.component';
import { CheckboxComponent } from '../component/checkbox/checkbox.component';
import { ChipsComponent } from '../component/chips/chips.component';
import { DatePickerComponent } from '../component/date-picker/date-picker.component';
import { DividerComponent } from '../component/divider/divider.component';
import { EditorComponent } from '../component/editor/editor.component';
import { RadioComponent } from '../component/radio/radio.component';
import { SelectComponent } from '../component/select/select.component';
import { SlideToggleComponent } from '../component/slide-toggle/slide-toggle.component';
import { SliderComponent } from '../component/slider/slider.component';
import { TextAreaComponent } from '../component/text-area/text-area.component';
import { TextboxComponent } from '../component/textbox/textbox.component';

/**
 * @description
 * Interface use for IRequestOptions.
 * @usageNotes
 * ```ts
 *       {
 *        headers : "application/json",
 *        observe : "body",
 *        params : {},
 *        reportProgress : true,
 *        responseType : "application/json",
 *        withCredentials : true,
 *        body : {"username" : "test@test.com", "password": "xxxxxx"},
 *       }
 * ```
 */
export declare interface IRequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body' | 'events' | 'response';
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
  body?: any;
}

/**
 * @description
 * Interface use for mat table header and column.
 * @usageNotes
 * ```ts
 *       columns: MatTable[] = [
 *        { 
 *          columnDef: 'position', 
 *          header: 'No.', 
 *          cell: (element: any) => `${element.position}` 
 *          }
 *      ]
 * ```
 */
export declare interface MatTable {
  columnDef?: string;
  header?: string;
  cell?: any;
}

/**
 * @description
 * Interface use for mat table configuration.
 * @usageNotes
 * ```ts
 *       {
 *          columns : MatTable[] = [{
 *            columnDef: 'position',
 *            header: 'No.', 
 *            cell: (element: any) => `${element.position}` 
 *        }, filter : true,
 *           pagination : true
 *        ]}
 * ```
 */
export declare interface MatTableConfig {
  columns?: MatTable[];
  dataSource?: any;
  filter?: boolean;
  paginationConfig?: MatTablePaginationConfig;
  progressBar?: boolean;
  actionButton?: TableButtonAction;
}
/**
 * @description
 * Interface use for mat table pagination configuration.
 */
export declare interface MatTablePaginationConfig {
  pagination?: boolean;
  pageSizeOptions?: number[];
}
/**
 * @description
 * Interface use for mat table action button configuration.
 */
export declare interface TableButtonAction {
  edit?: boolean;
  delete?: boolean;
}

/**
 * @description
 * Interface use for material hint component.
 */
export declare interface IMatHint {
  text?: string;
  link?: IRouteLink;
}

/**
 * @description
 * Interface for routerLink
 */
export declare interface IRouteLink {
  routerLink: string;
  queryParams?: string;
  isLink?: boolean;
}