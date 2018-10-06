import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {SnackBarMatSwUpdate} from 'ngx-mat-sw-update';

@Injectable({
  providedIn: 'root'
})
export class DeSnackBarMatSwUpdate extends SnackBarMatSwUpdate {

  constructor(updates: SwUpdate,
              snackBar: MatSnackBar,
              @Inject(LOCALE_ID) locale: string) {
    super(updates, snackBar, locale);
  }

  doShow(data: UpdateAvailableEvent): boolean {
    // return data.available.appData.crucial;
    return true;
  }

  getTranslation(locale: string): { description: string, reloadBtn: string } {
    return {
      description: 'Eine aktualisierte Version der Website steht zur Verfügung. Klicken sie jetzt auf den Button!',
      reloadBtn: 'UPDATE'
    };
  }

}

