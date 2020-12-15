import { Component, OnInit, Input } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  totalPage: number = 27;
  paginationSize: number[] = new Array(10);
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor() { }

  ngOnInit(): void {
    this.paginationSize = [...Array.from({ length: (this.totalPage < 10 ? this.totalPage : 10) }, (_, i) => i + 1)];
  }

  receiveBtnChange($event) {
    let start;
    let end;

    if (this.totalPage <= 10) {
      this.paginationSize = [...Array.from({ length: this.totalPage }, (_, i) => i + 1)]
    } else {
      // start
      if ($event < 6) {
        start = 1;
      } else {
        if (($event + 5) < this.totalPage) {
          start = ($event - 5);
        } else {
          start = this.totalPage - 10;
        }
      }
      //End 
      if (($event + 5) < this.totalPage) {
        end = start + 9;
      } else {
        end = this.totalPage;
      }
      this.paginationSize = this.range(start, end);
    }

  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Pagination_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Pagination_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

  private range(start, end) {
    return Array(Math.abs(start - end) + 1).fill(start).map((v, i) => v + i * (start > end ? -1 : 1));
  }

}
