import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {assertHasImageProperty} from "../../errors";
import {DialogInput} from '../../models';

@Component({
  selector: 'msu-image-dialog',
  templateUrl: './msu-image-dialog.component.html',
  styleUrls: ['./msu-image-dialog.component.css']
})
export class MsuImageDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInput) {
    assertHasImageProperty(this.data);
  }

}
