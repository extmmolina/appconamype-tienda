import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tramites-mype',
  templateUrl: './tramites-mype.page.html',
  styleUrls: ['./tramites-mype.page.scss'],
})
export class TramitesMypePage implements OnInit {

  titulo: string;
  menu = [
    {
      title: 'Registro MyPE',
      url: '/registro-mype',
      image: '../assets/1.png'
    },
    {
      title: 'Exportaciones',
      url: '/exportaciones',
      image: '../assets/2.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Tramites MyPE';
  }

}
