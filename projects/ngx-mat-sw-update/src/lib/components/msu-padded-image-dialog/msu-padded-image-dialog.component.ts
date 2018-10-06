import {Component, Inject, OnInit} from '@angular/core';
import {DialogInput} from "../../models";
import {MAT_DIALOG_DATA} from "@angular/material";
import {assertHasImageProperty} from "../../errors";

@Component({
  selector: 'msu-padded-image-dialog',
  templateUrl: './msu-padded-image-dialog.component.html',
  styleUrls: ['./msu-padded-image-dialog.component.css']
})
export class MsuPaddedImageDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInput) {
    assertHasImageProperty(this.data);
  }

}
