import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  botonText: string;
  formId: number;
  tituloText: string;

  constructor() { }

  ngOnInit() {
    this.tituloText = 'Registra tus compras y lleva un historico';
    this.botonText = 'Ingresar Compra';
    this.formId = 1;
  }

}
