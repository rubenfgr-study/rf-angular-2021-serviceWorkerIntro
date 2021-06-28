import { Component } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';
import { LogUpdateServiceService } from './services/log-update.service';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'serviceWorkerIntro';

  constructor(
    private logUpdateService: LogUpdateServiceService,
    private checkForUpdateService: CheckForUpdateService,
    private pushService: PushService
  ) {}
}
