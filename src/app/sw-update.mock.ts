import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwUpdateMock {

  readonly available = of({});
  readonly activated = of({});

  constructor() {
  }

  readonly isEnabled = true;

  checkForUpdate(): Promise<void> {
    return Promise.resolve();
  }

  activateUpdate(): Promise<void> {
    return Promise.resolve();
  }
}
