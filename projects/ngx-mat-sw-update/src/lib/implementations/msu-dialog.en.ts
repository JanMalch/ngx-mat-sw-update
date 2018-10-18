import {Inject, Injectable, LOCALE_ID, Optional, Type} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {MsuDialog} from './msu-dialog';
import {DialogInput} from '../models';
import {MSU_DIALOG_COMPONENT, MSU_DIALOG_IMAGE} from '../tokens';
import {MsuBasicDialogComponent} from '../components/msu-basic-dialog/msu-basic-dialog.component';

@Injectable()
export class MsuDialogEn extends MsuDialog {

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

  getDialogInput(data: UpdateAvailableEvent, locale: string): DialogInput {
    return {
      title: 'Update available',
      cancelBtn: 'Cancel',
      reloadBtn: 'Reload',
      description: 'There\'s a new update available, which brings new features and bug fixes!\n'
        + 'Simply refresh the page to get the latest version.',
      image: this.image
    };
  }

}
