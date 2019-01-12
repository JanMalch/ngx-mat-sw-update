import {OnDestroy} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {BehaviorSubject, from, Observable, Subject} from 'rxjs';
import {filter, mergeMap, takeUntil, tap} from 'rxjs/operators';

export abstract class MatSwUpdate implements OnDestroy {

  protected readonly onDestroy$ = new Subject<void>();
  protected readonly _updateAvailable$ = new BehaviorSubject<boolean>(false);
  protected readonly _lastCheck$ = new Subject<Date>();
  private forceNext = false;
  private running = false;

  protected constructor(protected updates: SwUpdate) {
  }

  get updateAvailable$(): Observable<boolean> {
    return this._updateAvailable$.asObservable();
  }

  get updateAvailable(): boolean {
    return this._updateAvailable$.getValue();
  }

  get lastCheck$(): Observable<Date> {
    return this._lastCheck$.asObservable();
  }

  abstract doShow(data: UpdateAvailableEvent): boolean;

  abstract showNotification(data: UpdateAvailableEvent): Observable<boolean>;

  private setup() {
    if (!this.running) {
      this.updates.available.pipe(
        takeUntil(this.onDestroy$),
        tap(() => this._updateAvailable$.next(true)),
        filter(event => this.shouldForce() || this.doShow(event)),
        mergeMap(event => this.showNotification(event))
      ).subscribe(result => this.onAction(result));

      this.running = true;
    }
  }

  checkForUpdate() {
    this._lastCheck$.next(new Date());
    if (this.updates.isEnabled) {
      this.setup();
      this.updates.checkForUpdate();
    } else {
      console.warn('MatSwUpdate is not enabled in dev mode. ' +
        'To learn how to test your notification visit https://github.com/JanMalch/ngx-mat-sw-update#test-notification');
    }
  }

  onAction(response: boolean): void {
    if (response) {
      this.activateUpdate().subscribe(() => this.reloadPage());
    }
  }

  forceNotification() {
    this.doForceNext();
    this.checkForUpdate();
  }

  protected activateUpdate(): Observable<void> {
    return from(this.updates.activateUpdate());
  }

  protected reloadPage(force?: boolean): void {
    document.location.reload(force);
  }

  ngOnDestroy() {
    this._lastCheck$.complete();
    this._updateAvailable$.complete();
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private shouldForce(): boolean {
    const doForce = this.forceNext;
    this.forceNext = false;
    return doForce;
  }

  private doForceNext() {
    this.forceNext = true;
  }


}

