import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  botonText: string;
  formId: number;
  tituloText: string;

  constructor() {
    this.tituloText = 'Registre sus gastos y mejore sus finanzas';
    this.botonText = 'Ingresar gastos';
    this.formId = 2;
  }

  ngOnInit() {
  }

}
