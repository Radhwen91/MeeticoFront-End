import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { ChatMessageDto } from '../models/ChatMessageDto';
import { WebsocketService } from '../services/websocket.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  input  ;
  public stompClient;
  public msg = [];
  inputp ; 
notificationCount = 0 ;
notif=0;
date : Date ;
  constructor(private serv: WebsocketService)
  { this.initializeWebSocketConnection()}
 
  ngOnInit(
  ): void {   
    
      
}
    
  

  updateNotificationDisplay() {
    
   
    if(this.notificationCount!=this.notif){
      this.notif=this.notif+1;
      console.log("test")

    }else{
      console.log("test2")

    }



    



  }


  mysubid='amine' ; 


  sendM(message : any) {
    this.stompClient.send('/ws/message' , {},message);
    console.log("done"+message)
    this.notificationCount=this.notificationCount+1


  }
  

  sendMessage() {
    
    this.sendM(JSON.stringify({'messageContent':  this.input }))
    
console.log("sending"+this.input);

    
  }

sendP(message){
  this.stompClient.send('/ws/private-message/' , {},message,);
    console.log("done"+message)
    this.date  =new Date();
    console.log(this.date) ;
  }
 
  sendPrivate(){
    this.sendP(JSON.stringify({'messageContent':  this.inputp }))
    
    console.log("sending"+this.inputp);
  }

  

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8081/our-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      console.log("connect"+frame)

      that.stompClient.subscribe('/topic/messages', (message) => {
        
        if (message.body) {
          that.msg.push(JSON.parse(message.body).content);

        }
        
      });

      that.stompClient.subscribe('/user/topic/private-messages', (message) => {
        if (message.body) {
          that.msg.push(JSON.parse(message.body).content);
        }
      } , { id: this.mysubid });


      that.stompClient.subscribe('/user/topic/private-notifications', (message) => {

        if (message.body) {
          that.msg.push(JSON.parse(message.body).content);
        }
      });

     

    });
  }

  
  
}
