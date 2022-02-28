import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalservicios',
  templateUrl: './modalservicios.page.html',
  styleUrls: ['./modalservicios.page.scss'],
})
export class ModalserviciosPage implements OnInit {

  // Centros de CONAMYPE
  cconamype = [
    {
      servicio_id: 1,
      nombre: 'CONAMYPE La Unión',
      pos_x: 13.3397753,
      pos_y: -87.8524315,
      direccion: '3A Calle Poniente, La Union.'
    },
    {
      servicio_id: 2,
      nombre: 'CONAMYPE San Salvador',
      pos_x: 13.710567,
      pos_y: -89.2110524,
      direccion: 'Pasaje Mar de Plata, Calle Gabriela Mistral 1, San Salvador.'
    }
  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  buscarCede() {
    this.modalCtrl.dismiss({
      pos_x: 13.3397753,
      pos_y: -87.8524315,
      direccion: '3A Calle Poniente, La Union.',
      nombre: 'CONAMYPE La Unión'
    });
  }

}
