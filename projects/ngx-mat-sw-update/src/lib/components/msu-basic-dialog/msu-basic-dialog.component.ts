import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {DialogInput} from '../../models';

@Component({
  selector: 'msu-basic-dialog',
  templateUrl: './msu-basic-dialog.component.html'
})
export class MsuBasicDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInput) {
  }

}
