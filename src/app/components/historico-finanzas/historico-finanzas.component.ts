import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-finanzas',
  templateUrl: './historico-finanzas.component.html',
  styleUrls: ['./historico-finanzas.component.scss'],
})
export class HistoricoFinanzasComponent implements OnInit {

  fecha: string;
  constructor() { }

  ngOnInit() { }

  toggle(event) {
    // this.fecha = event.split('-').reverse().join('-');
    console.log(event);
  }

}
