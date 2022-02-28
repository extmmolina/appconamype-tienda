import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-hacienda',
  templateUrl: './index-hacienda.page.html',
  styleUrls: ['./index-hacienda.page.scss'],
})
export class IndexHaciendaPage implements OnInit {

  titulo: string;
  menu = [
    {
      title: 'Calendario',
      url: '/calendario',
      icon: 'calendar_today',
      color: 'red',
      colordark: 'reddark'
    },
    {
      title: 'Videos',
      url: '/vlog',
      icon: 'ondemand_video',
      color: 'orange',
      colordark: 'orangedark'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Recursos de hacienda';
  }

}
