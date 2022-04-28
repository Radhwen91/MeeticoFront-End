import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  private toggleButton: any;
  private sidebarVisible: boolean;
  constructor(public location: Location, private element : ElementRef/*public userService: UserService*/) {

    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    /* if(this.userService.currentUser.messages!=undefined)
     {
       this.messages=this.userService.currentUser.messages.length;
     }
     else
     {
       this.messages=0;
     }*/
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
    }
    if( titlee === '/home' ) {
      return true;
    }
    else {
      return false;
    }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
    }
    if( titlee === '/documentation' ) {
      return true;
    }
    else {
      return false;
    }
  }


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

}
