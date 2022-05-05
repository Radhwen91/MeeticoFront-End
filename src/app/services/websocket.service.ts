import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { ChatMessageDto } from '../models/ChatMessageDto';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  
  stompClient  ;

  constructor() {
  }
  

  
}





