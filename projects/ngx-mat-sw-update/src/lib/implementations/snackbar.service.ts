import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NgxMatSwUpdateService} from '../ngx-mat-sw-update.service';

@Injectable({
  providedIn: 'root'
})
export abstract class SnackBarMatSwUpdate extends NgxMatSwUpdateService {

  protected constructor(updates: SwUpdate,
                        protected snackBar: MatSnackBar,
                        @Inject(LOCALE_ID) protected locale: string) {
    super(updates);
  }

  abstract getTranslation(locale: string): { description: string, reloadBtn: string };

  showNotification(data: UpdateAvailableEvent): Observable<boolean> {
    const {description, reloadBtn} = this.getTranslation(this.locale);
    const ref = this.snackBar.open(description, reloadBtn);

    return ref.afterDismissed().pipe(
      map(dismiss => dismiss.dismissedByAction)
    );
  }

  onAction(response: boolean): void {
    if (response) {
      this.activateUpdate().subscribe(() => this.reloadPage());
    }
  }

}
