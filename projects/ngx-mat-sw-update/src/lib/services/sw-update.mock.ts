import {Observable, of, Subject} from 'rxjs';

export class SwUpdateMock {

  private readonly _available = new Subject();

  get available(): Observable<any> {
    return this._available.asObservable();
  }

  readonly activated = of({});

  constructor() {
  }

  readonly isEnabled = true;

  checkForUpdate(): Promise<void> {
    this._available.next({});
    return Promise.resolve();
  }

  activateUpdate(): Promise<void> {
    return Promise.resolve();
  }
}
