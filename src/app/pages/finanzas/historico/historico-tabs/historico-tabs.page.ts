import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-tabs',
  templateUrl: './historico-tabs.page.html',
  styleUrls: ['./historico-tabs.page.scss'],
})
export class HistoricoTabsPage implements OnInit {
  titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Historico de tus finanzas';
  }

}
