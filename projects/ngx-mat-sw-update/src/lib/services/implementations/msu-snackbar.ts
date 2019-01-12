import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSwUpdate} from '../mat-sw-update';

export abstract class MsuSnackBar extends MatSwUpdate {

  protected constructor(updates: SwUpdate,
                        protected snackBar: MatSnackBar) {
    super(updates);
  }

  abstract getTranslation(data: UpdateAvailableEvent): { description: string, reloadBtn: string };

  showNotification(data: UpdateAvailableEvent): Observable<boolean> {
    const {description, reloadBtn} = this.getTranslation(data);
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
