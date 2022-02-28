import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AuthUser } from './interfaces/interfaces';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  authUser: AuthUser;
  user: string;
  loggedIn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router

  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.checkStorage();
  }

  userData() {
    this.checkStorage();
    if (this.authUser.access_token !== null) {
      this.user = this.authUser.nombre;
      this.loggedIn = true;
      // this.menu.enable(true, 'menu');
    }

    if (!this.authUser) {
      this.loggedIn = false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('android')) {
        this.setupPush();
      }
    });
  }

  setupPush() {
    // https://devdactic.com/push-notifications-ionic-onesignal/
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit(environment.OneSignalAppID, environment.AndroidId);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      const additionalData = data.notification.payload.additionalData;

      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });

    this.oneSignal.endInit();
  }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    });
    alert.present();
  }

  navrouter(linkRouter: string){
    this.router.navigate([linkRouter]);
  }

  logOut() {
    // this.menu.enable(false, 'menu');
    this.authService.logout();
    this.loggedIn = false;
    localStorage.removeItem('login');
    console.log(localStorage.getItem('login'));
    this.checkStorage();
  }

  menuOpened() {
    this.userData();
  }

  async checkStorage() {
    this.authUser = await this.authService.userData();
  }
}
