import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import {
  Appearance,
  ComponentType,
} from 'projects/falcon-core/src/public-api';

@Component({
  selector: 'app-select-html',
  templateUrl: './select-html.component.html',
  styleUrls: ['./select-html.component.scss'],
})
export class SelectHtmlComponent {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  selectOnHtmlConfig = {
    componentProperty: {
      label: 'Basic mat-select',
      options: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' },
      ],
      appearance: Appearance.Outline,
    },
  };

  constructor() {}

  selectionChange($event) {
    console.log($event);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Select_OnHtml_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Select_OnHtml_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
