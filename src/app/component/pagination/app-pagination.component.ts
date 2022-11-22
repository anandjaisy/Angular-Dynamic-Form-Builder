import { Component, OnInit, Input } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';

@Component({
  selector: 'app-pagination',
  templateUrl: './app-pagination.component.html',
  styleUrls: ['./app-pagination.component.scss'],
})
export class AppPaginationComponent {
  pageSize: Number = 10;
  totalPage: Number = 27;
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  constructor() {}

  paginationEvent($event) {}

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Pagination_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Pagination_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
