import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { CompraProductoPage } from '../compra-producto/compra-producto.page';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.page.html',
  styleUrls: ['./carrito-compra.page.scss'],
})
export class CarritoCompraPage implements OnInit {
  detalle:any = [];
  titulo: string;
  constructor(public modalCtrl: ModalController, public toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.titulo = 'Cesta(1)';
    if (this.router.getCurrentNavigation().extras.queryParams.datos) {
      this.detalle.push(this.router.getCurrentNavigation().extras.queryParams.datos);
    }
    console.log(JSON.stringify(this.detalle));
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
