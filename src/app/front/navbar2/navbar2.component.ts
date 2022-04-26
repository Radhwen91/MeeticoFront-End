import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {
  constructor(/*public userService: UserService*/) {}

  // invitations = this.userService.currentUser.invitations.length;
  messages:number;

  users;

  subNav = false;
  searchResult = false;
  match = false;
  searchedBy="all"
  activeClicked(searchedBy){

    this.searchedBy=searchedBy;
  }
  enableSeachBy() {
    this.subNav = true;
  }
  disableSeachBy() {
    this.subNav = false;
  }
  enableSeachResult() {
    this.searchResult = true;
    this.subNav = false;
  }
  disableSeachResult() {
    this.searchResult = false;
  }


  /*
   SeachResult(e) {
     if(e.target["value"]!="")
     {
       this.enableSeachResult();

     }
     else
     {
       this.disableSeachResult();
       this.enableSeachBy();
     }
     if(this.searchedBy=="all"){
       const allUsers=this.userService.getByName(e.target["value"]).concat(this.userService.getByJob(e.target["value"])).concat(this.userService.getByLoc(e.target["value"]))
       this.users=[...new Set(allUsers)]

     }
     else if(this.searchedBy=="people"){


       this.users = this.userService.getByName(e.target["value"]);
       console.log(this.users);
     }
     else if(this.searchedBy=="job"){

       this.users = this.userService.getByJob(e.target["value"]);
     }
     else if(this.searchedBy=="loc"){

       this.users = this.userService.getByLoc(e.target["value"]);
     }
     console.log(this.users)
     if (this.users.length === 0) {
       this.match = true;
       this.disableSeachBy();
     }
   }*/
  ngOnInit() {
    /* if(this.userService.currentUser.messages!=undefined)
     {
       this.messages=this.userService.currentUser.messages.length;
     }
     else
     {
       this.messages=0;
     }*/
  }
}
