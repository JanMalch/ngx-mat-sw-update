import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {from, Observable, Subject} from 'rxjs';
import {filter, mergeMap, takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class MatSwUpdate implements OnInit, OnDestroy {

  protected readonly onDestroy$ = new Subject<void>();

  protected constructor(protected updates: SwUpdate) {
  }

  ngOnInit() {
    this.updates.available.pipe(
      takeUntil(this.onDestroy$),
      filter(event => this.doShow(event)),
      mergeMap(event => this.showNotification(event))
    ).subscribe(result => this.onAction(result));
  }

  abstract doShow(data: UpdateAvailableEvent): boolean;

  abstract showNotification(data: UpdateAvailableEvent): Observable<boolean>;

  abstract onAction(response: boolean): void;

  protected activateUpdate(): Observable<void> {
    return from(this.updates.activateUpdate());
  }

  protected reloadPage(force?: boolean): void {
    document.location.reload(force);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}

