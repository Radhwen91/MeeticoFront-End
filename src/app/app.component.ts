import { Component, OnInit } from '@angular/core';
import { TokenService } from './_services/token.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationStart, Router } from '@angular/router';
// import { getSunrise, getSunset } from 'sunrise-sunset-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hasValue = false;
  underConstruction = false;
  components = {
    RegisterComponent,
    LoginComponent
  };
  private roles: any;
  darkMode = false;
  loggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  now?: string;
  searchedText = '';
  searchOptions = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ];
  constructor(private token: TokenService, private router: Router) {
    setInterval((latitude: number, longitude: number, enableDarkMode: boolean) => {
      this.now = new Date().toString().slice(4, 15) + ',' + new Date().toString().slice(15, 24);
      // navigator.geolocation.getCurrentPosition((position) => {
      //   latitude = position.coords.latitude;
      //   longitude = position.coords.longitude;
      //   const currentTime = new Date().getTime();
      //   const sunriseTime = getSunrise(latitude, longitude);  
      //   const sunsetTime = getSunset(latitude, longitude);   
        // if ((sunriseTime > currentTime) && (currentTime >= sunsetTime)) {
        //   enableDarkMode = true;
        // }
        // else {
        //   enableDarkMode = false;
        // };
        // console.log(enableDarkMode)
      // });
    }, 1);
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.underConstruction = event.url !== "/"
      };
    });
  };
  ngOnInit() {
    this.loggedIn = !!this.token.getToken();
    if (this.loggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = undefined;
    };
  };
  onClick() {
    this.darkMode = !this.darkMode;
  };
  onLogOut() {
    this.token.signOut();
  };
};