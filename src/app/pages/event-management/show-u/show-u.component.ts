import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { userr } from 'src/app/models/userr';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-show-u',
  templateUrl: './show-u.component.html',
  styleUrls: ['./show-u.component.scss']
})
export class ShowUComponent implements OnInit {
  user:User[] ;
  id: number;
  userObser:Subscription ;
  constructor(private serv:EventServiceService, private router:Router,  private serviceRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.serviceRoute.snapshot.params.id;
   
    
    this.userObser = this.serv.getMyUser(+this.id).subscribe(
      (users:User[])=>{
        this.user = users;
        console.log("this.user : ",this.user);
      }
    );

  }



  deleteUser(userid :number ){
this.serv.deleteUserS(userid , this.id).subscribe({
  next:(res)=>{console.log(res);
    
    this.user =  this.user.filter((u=>u.userId!=userid))
},
    
  error:(err)=>{console.log(err);  }
})



  }

 
 




}
