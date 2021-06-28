import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LogUpdateServiceService {
  constructor(updates: SwUpdate) {
    updates.available.subscribe((event) => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      updates.activateUpdate().then(() => {
        console.log('Reload in 5 secs...');
        delay(5000);
        location.reload();
      });
    });
    updates.activated.subscribe((event) => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    updates.unrecoverable.subscribe((event) => {
      console.log(
        `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
          'Please reload the page.'
      );
    });
  }
}
