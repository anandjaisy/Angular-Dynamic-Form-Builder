import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor() { }

  ngOnInit(): void {
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.ProgressBar_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.ProgressBar_TS_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
