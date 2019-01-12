import {Inject, Type} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {MsuDialog} from './msu-dialog';
import {DialogInput} from '../../models';
import {MSU_DIALOG_COMPONENT, MSU_DIALOG_IMAGE} from '../../tokens';

export class MsuDialogEn extends MsuDialog {

  constructor(updates: SwUpdate,
              dialog: MatDialog,
              @Inject(MSU_DIALOG_COMPONENT) readonly usedComponent: Type<any>,
              @Inject(MSU_DIALOG_IMAGE) protected image: string) {
    super(updates, dialog);
  }

  doShow(data: UpdateAvailableEvent): boolean {
    // return data.available.appData.crucial;
    return true;
  }

  getDialogInput(data: UpdateAvailableEvent): DialogInput {
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
