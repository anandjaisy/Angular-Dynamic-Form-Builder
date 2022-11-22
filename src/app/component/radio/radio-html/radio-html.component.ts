import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import {
  Appearance,
  ComponentType,
} from 'projects/falcon-core/src/public-api';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-radio-html',
  templateUrl: './radio-html.component.html',
  styleUrls: ['./radio-html.component.scss'],
})
export class RadioHtmlComponent {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  htmlRadioConfig = {
    componentProperty: {
      options: ['Bold', 'Italics', 'Roman'],
      appearance: Appearance.After,
      groupCss: 'radio-group-column',
      componentCss: 'radio-button',
    },
    componentType: ComponentType.Radio,
  };
  constructor() {}

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Radios_OnHtml_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Radio_OnHtml_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

  radioGroupChangeEvent($event) {}
}
