import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-finanzas',
  templateUrl: './index-finanzas.page.html',
  styleUrls: ['./index-finanzas.page.scss'],
})
export class IndexFinanzasPage implements OnInit {

  titulo: string;
  menu = [
    {
      title: 'Mis Productos',
      url: '/productos',
      icon: 'local_mall',
      color: 'yellow',
      colordark: 'yellowdark'
    },
    {
      title: 'Mi Catalogo',
      url: '/catalogo',
      icon: 'storefront',
      color: 'pink',
      colordark: 'pinkdark'
    },
    {
      title: 'Finanzas',
      url: '/registro-finanzas',
      icon: 'attach_money',
      color: 'green',
      colordark: 'greendark'
    },
    {
      title: 'Historico',
      url: '/historico-main',
      icon: 'history',
      color: 'teal',
      colordark: 'tealdark'
    }
    // ,
    // {
    //   title: 'Gráfico',
    //   url: '/',
    //   icon: 'bar_chart',
    //   color: 'purple',
    //   colordark: 'purpledark'
    // }
  ];
  constructor() { }

  ngOnInit() {
    this.titulo = 'Mi tienda';
  }

}
