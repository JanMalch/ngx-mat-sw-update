import {Inject, Injectable, LOCALE_ID, Optional, Type} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {DialogMatSwUpdate} from './dialog.service';
import {DialogInput} from '../models';
import {english} from '../translations';
import {MSU_DIALOG_COMPONENT, MSU_DIALOG_IMAGE} from '../tokens';
import {MsuBasicDialogComponent} from '../components/msu-basic-dialog/msu-basic-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EnDialogMatSwUpdate extends DialogMatSwUpdate {

  readonly usedComponent: Type<any>;

  constructor(updates: SwUpdate,
              dialog: MatDialog,
              @Inject(LOCALE_ID) locale: string,
              @Optional() @Inject(MSU_DIALOG_COMPONENT) _component: Type<any>,
              @Optional() @Inject(MSU_DIALOG_IMAGE) protected image: string) {
    super(updates, dialog, locale);
    this.usedComponent = _component || MsuBasicDialogComponent;
  }

  doShow(data: UpdateAvailableEvent): boolean {
    // return data.available.appData.crucial;
    return true;
  }

  getDialogInput(locale: string): DialogInput {
    return {...english, image: this.image };
  }

}
