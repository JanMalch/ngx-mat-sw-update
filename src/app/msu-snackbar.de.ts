import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {MsuSnackBar} from 'ngx-mat-sw-update';

@Injectable()
export class DeSnackBarMatSwUpdate extends MsuSnackBar {

  constructor(updates: SwUpdate,
              snackBar: MatSnackBar) {
    super(updates, snackBar);
  }

  doShow(data: UpdateAvailableEvent): boolean {
    // return data.available.appData.crucial;
    return true;
  }

  getTranslation(data: UpdateAvailableEvent): { description: string, reloadBtn: string } {
    return {
      description: 'Eine aktualisierte Version der Website steht zur Verfügung. Klicken sie jetzt auf den Button!',
      reloadBtn: 'UPDATE'
    };
  }

}

