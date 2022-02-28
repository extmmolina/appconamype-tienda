import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CompraProductoPage } from '../compra-producto/compra-producto.page';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.page.html',
  styleUrls: ['./carrito-compra.page.scss'],
})
export class CarritoCompraPage implements OnInit {

  titulo: string;
  constructor(public modalCtrl: ModalController, public toastController: ToastController) { }

  ngOnInit() {
    this.titulo = 'Cesta(1)';
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: CompraProductoPage
    });
    await modal.present();
  }

  async borrarCarrito() {
    const toast = await this.toastController.create({
      message: '¿Esta seguro que desea eliminar de la cesta?',
      position: 'top',
      color: 'danger',
      buttons: [
        {
          side: 'end',
          text: 'Cancelar',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Eliminar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
