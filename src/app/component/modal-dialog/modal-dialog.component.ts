import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from 'projects/falcon-core/src/lib/component/dialog/dialog.component';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { IDialogData } from 'projects/falcon-core/src/lib/model/interface';
@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  private iDialogData: IDialogData = {} as IDialogData;
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  constructor(public dialog: MatDialog) {}
  async openDialog() {
    this.iDialogData.bodyMessage =
      'Are you sure you want to delete ?';
    this.iDialogData.cancelBtnText = 'Cancel';
    this.iDialogData.mainbtnText = 'Delete';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: this.iDialogData,
    });
    await dialogRef.afterClosed().subscribe((result) => {});
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Delete_Dialog_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Delete_Dialog_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
