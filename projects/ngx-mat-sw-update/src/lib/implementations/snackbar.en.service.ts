import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {english} from '../translations/en';
import {SnackBarMatSwUpdate} from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class EnSnackBarMatSwUpdate extends SnackBarMatSwUpdate {

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
    return {description: english.description, reloadBtn: 'RELOAD'};
  }

}

