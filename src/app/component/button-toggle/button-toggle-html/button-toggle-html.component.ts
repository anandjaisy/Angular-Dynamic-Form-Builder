import { Component, OnInit } from '@angular/core';
import { Appearance, ComponentType } from 'projects/falcon-core/src/public-api';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-button-toggle-html',
  templateUrl: './button-toggle-html.component.html',
  styleUrls: ['./button-toggle-html.component.scss']
})
export class ButtonToggleHtmlComponent implements OnInit {

  htmlButtonToggleConfig =
    {
      componentProperty: {
        options: [{ value: 'Bold', viewValue: 'Bold', icon: 'format_bold' },
        { value: 'Italic', viewValue: 'Italic', icon: 'format_italic' },
        { value: 'Underline', viewValue: 'Underline', icon: 'format_underlined' }],
        appearance: Appearance.Standard,
        groupCss: 'w-100',
        componentCss: 'w-100'
      },
      componentType: ComponentType.ButtonToggle
    };

  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Button_Toggle_OnHtml_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Button_Toggle_OnHtml_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

  toggleChange($event) {
    console.log($event);
  }

}
