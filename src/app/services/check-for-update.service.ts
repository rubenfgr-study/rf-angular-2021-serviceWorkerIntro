import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat } from 'rxjs';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckForUpdateService {
  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$
      .pipe(tap((next) => console.log(next)))
      .subscribe(() => updates.checkForUpdate());
  }
}
