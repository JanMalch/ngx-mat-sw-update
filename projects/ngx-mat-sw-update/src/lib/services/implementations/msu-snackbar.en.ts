import {Inject, Optional} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {MsuSnackBar} from './msu-snackbar';

export class MsuSnackBarEn extends MsuSnackBar {

  constructor(updates: SwUpdate,
              snackBar: MatSnackBar) {
    super(updates, snackBar);
  }

  doShow(data: UpdateAvailableEvent): boolean {
    // return data.available.appData.crucial;
    return true;
  }

  getTranslation(data: UpdateAvailableEvent): { description: string, reloadBtn: string } {
    return {description: "There's a new update available, which brings new features and bug fixes! " +
        "Simply refresh the page to get the latest version.", reloadBtn: 'RELOAD'};
  }

}
