import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from 'projects/falcon-core/src/lib/component/bottom-sheet/bottom-sheet.component';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class ExampleBottomSheetComponent implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  response : string;
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    const data = [{'levelOneText': 'Google Keep', 'levelTwoText': 'Add to a note'},
        {'levelOneText': 'Google Keep', 'levelTwoText': 'Add to a note'},
        {'levelOneText': 'Google Docs', 'levelTwoText': 'Embed in a document'},
        {'levelOneText': 'Google Plus', 'levelTwoText': 'Share with your friends'},
        {'levelOneText': 'Google Hangouts', 'levelTwoText': 'Show to your coworkers'},
        {'levelOneText': 'Google Keep', 'levelTwoText': 'Add to a note'},
        {'levelOneText': 'Google Docs', 'levelTwoText': 'Embed in a document'},
        {'levelOneText': 'Google Plus', 'levelTwoText': 'Share with your friends'},
        {'levelOneText': 'Google Hangouts', 'levelTwoText': 'Show to your coworkers'}]
    const bottomSheetRef = this._bottomSheet.open(BottomSheetComponent, { data });
    bottomSheetRef.afterDismissed().subscribe((data) => {
      console.log(data);
      this.response = data;
    });
  }


  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.BottomSheet_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.BottomSheet_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
