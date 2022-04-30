import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import Pusher from 'pusher-js';


@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  channel: any;
  constructor() {

    this.pusher = new Pusher (environment.pusher.key, {
      cluster: environment.pusher.cluster,
    });
    this.channel = this.pusher.subscribe('Notification');
    // console.log(`this.channel ${this.channel}`)
   }
}