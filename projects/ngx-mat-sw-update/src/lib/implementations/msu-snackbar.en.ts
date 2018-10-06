import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {MsuSnackBar} from './msu-snackbar';

@Injectable({
  providedIn: 'root'
})
export class MsuSnackBarEn extends MsuSnackBar {

  constructor(updates: SwUpdate,
              snackBar: MatSnackBar,
              @Inject(LOCALE_ID) locale: string) {
    super(updates, snackBar, locale);
  }

  doShow(data: UpdateAvailableEvent): boolean {
    // return data.available.appData.crucial;
    return true;
  }

  getTranslation(data: UpdateAvailableEvent, locale: string): { description: string, reloadBtn: string } {
    return {description: "There's a new update available, which brings new features and bug fixes! " +
        "Simply refresh the page to get the latest version.", reloadBtn: 'RELOAD'};
  }

}
