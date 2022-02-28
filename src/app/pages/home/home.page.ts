import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import {AuthUser} from '../../interfaces/interfaces';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  titulo: string;
  authUser: AuthUser;
  menu = [
    {
      title: 'Mercado',
      url: '/catalogo',
      icon: 'storefront',
      color: 'purple',
      colordark: 'purpledark'
    },
    // {
    //   title: 'Registro MyPE',
    //   url: '/registro-mype',
    //   icon: 'list_alt',
    //   color: 'teal',
    //   colordark: 'tealdark'
    // },
    {
      title: 'Ferias y Eventos',
      url: '/ferias-congresos',
      icon: 'business',
      color: 'orange',
      colordark: 'orangedark'
    },
    {
      title: 'Noticias',
      url: '/ferias-congresos',
      icon: 'book',
      color: 'pink',
      colordark: 'pinkdark'
    }
  ];
  loggedIn: boolean;

  constructor(public llamar: CallNumber, private authService: AuthService) { }

  ngOnInit() {
    this.titulo = 'CONAMYPE';
    // this.checkUser();
  }

  // tslint:disable-next-line: variable-name
  callNow(number: string) {
    this.llamar.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  /*async checkUser() {
    this.authUser = await this.authService.userData();

    if (this.authUser) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }*/

}
