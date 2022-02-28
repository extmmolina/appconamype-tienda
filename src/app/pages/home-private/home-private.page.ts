import { Component, OnInit } from '@angular/core';
import {AuthUser} from '../../interfaces/interfaces';

@Component({
  selector: 'app-home-private',
  templateUrl: './home-private.page.html',
  styleUrls: ['./home-private.page.scss'],
})
export class HomePrivatePage implements OnInit {

  titulo: string;
  phone : string;
  menu = [
    {
      title: 'Mis productos',
      url: '/productos',
      icon: 'local_mall',
      color: 'green',
      colordark: 'greendark'
    },
    {
      title: 'Mercado',
      url: '/catalogo',
      icon: 'storefront',
      color: 'purple',
      colordark: 'purpledark'
    },
    {
      title: 'Registro MyPE',
      url: '/registro-mype',
      icon: 'list_alt',
      color: 'teal',
      colordark: 'tealdark'
    }
  ];
  constructor() { }

  ngOnInit() {

  }
  callNow(phone){
    phone="0";
  }


}
