import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Login',
      url: '/login',
      icon:'arrow-forward'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'checkbox-outline'
    },
    {
      title: 'Reset Password',
      url: '/resetpassword',
      icon: 'help'
    },
    // {
    //   title: 'View Booking',
    //   url: '/viewbooking',
    //   icon: 'reverse-camera'
    // },
    // {
    //   title: 'Create Booking',
    //   url: '/createbooking',
    //   icon: 'exit'
    // },
    // {
    //   title: 'View Addons',
    //   url: '/viewaddons',
    //   icon: 'ice-cream'
    // },
    // {
    //   title: 'View Offers',
    //   url: '/viewoffers',
    //   icon: 'happy'
    // },
    // {
    //   title: 'View Movies',
    //   url: '/viewmovies',
    //   icon: 'videocam'
    // },
  ]


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
