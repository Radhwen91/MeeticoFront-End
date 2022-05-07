import { NotificationService } from './../../services/notification.service';
import { PusherService } from 'src/app/services/websocket/pusher.service';
import { Component, OnInit} from '@angular/core';
//import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
message:String;
user:String;
//private readonly notifier: NotifierService;

constructor(private pusherService: PusherService,private notificationservice:NotificationService) { }

ngOnInit() {
this.notification();
  }

public notification(){
  this.pusherService.channel.bind('AddReclamation', (data: any)=>{
    this.message=data[0].Message;
    this.user=data[0].FirstName;
    this.notificationservice.showInfo(this.message, this.user)
    
  });
}
}
