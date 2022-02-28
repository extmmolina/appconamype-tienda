import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  botonText: string;
  formId: number;
  tituloText: string;
  constructor() { }

  ngOnInit() {
    this.tituloText = 'Registre sus ventas y controle sus ingresos';
    this.botonText = 'Ingresar venta';
    this.formId = 3;
  }

}
