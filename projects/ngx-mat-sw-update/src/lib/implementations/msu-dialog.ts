import {Inject, Injectable, LOCALE_ID, Type} from '@angular/core';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogConfig} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSwUpdate} from '../mat-sw-update';
import {DialogInput} from '../models';

@Injectable()
export abstract class MsuDialog extends MatSwUpdate {

  protected constructor(updates: SwUpdate,
                        protected dialog: MatDialog,
                        @Inject(LOCALE_ID) protected locale: string) {
    super(updates);
  }

  abstract getDialogInput(data: UpdateAvailableEvent, locale: string): DialogInput;

  abstract get usedComponent(): Type<any>;

  showNotification(data: UpdateAvailableEvent): Observable<boolean> {
    const ref = this.dialog.open(this.usedComponent, {
      data: this.getDialogInput(data, this.locale)
    });

    return ref.afterClosed().pipe(
      map(Boolean)
    );
  }

  onAction(response: boolean): void {
    if (response) {
      this.activateUpdate().subscribe(() => this.reloadPage());
    }
  }

}
