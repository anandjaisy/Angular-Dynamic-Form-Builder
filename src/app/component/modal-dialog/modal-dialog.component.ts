import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'projects/falcon-core/src/lib/component/delete-dialog/delete-dialog.component';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  async openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {width: '350px',data: {id: 'asdasd-asdasda-asdasd'}});
    await dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Delete_Dialog_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Delete_Dialog_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
