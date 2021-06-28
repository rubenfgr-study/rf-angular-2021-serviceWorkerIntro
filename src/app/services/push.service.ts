import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private swPush: SwPush) {
    swPush.notificationClicks.subscribe((action) => {
      console.log(action);
    });
    swPush.messages.subscribe(messages => console.log('messages: ' + messages));
    swPush.subscription.subscribe(obs => console.log('obs: ' + obs));
   }
}
