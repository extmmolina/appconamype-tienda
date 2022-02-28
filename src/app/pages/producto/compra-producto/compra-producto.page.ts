import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-compra-producto',
  templateUrl: './compra-producto.page.html',
  styleUrls: ['./compra-producto.page.scss'],
})
export class CompraProductoPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
