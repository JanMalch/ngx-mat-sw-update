import {Type} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSwUpdate} from '../mat-sw-update';
import {DialogInput} from '../../models';

export abstract class MsuDialog extends MatSwUpdate {

  protected constructor(updates: SwUpdate,
                        protected dialog: MatDialog,
                        protected readonly msuDialogConfig: MatDialogConfig) {
    super(updates);
  }

  abstract getDialogInput(data: UpdateAvailableEvent): DialogInput;

  abstract get usedComponent(): Type<any>;

  showNotification(data: UpdateAvailableEvent): Observable<boolean> {
    const ref = this.dialog.open(this.usedComponent, {
      ...this.msuDialogConfig,
      data: this.getDialogInput(data)
    });

    return ref.afterClosed().pipe(
      map(Boolean)
    );
  }

}
