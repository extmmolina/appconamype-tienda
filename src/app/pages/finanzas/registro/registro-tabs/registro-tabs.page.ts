import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-tabs',
  templateUrl: './registro-tabs.page.html',
  styleUrls: ['./registro-tabs.page.scss'],
})
export class RegistroTabsPage implements OnInit {

  titulo: string;
  constructor() { }

  ngOnInit() {
    this.titulo = 'Registra tus finanzas';
  }

}
