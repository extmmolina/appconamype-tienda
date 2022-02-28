import { Component, OnInit } from '@angular/core';
import { NuevosProductos } from 'src/app/interfaces/interfaces';
import { Productos } from 'src/app/interfaces/interfaces';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';
import { ModalController } from '@ionic/angular';
import { ModalBuscarPage } from '../modal-buscar/modal-buscar.page';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  titulo: string;
  productosRecientes: NuevosProductos[] = [];
  productos: Productos[] = [];

  constructor(public httpService: HttpService, private toastService: ToastService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.titulo = 'Catalogo de productos';
    // cargando los productos recientes
    this.lastProducts();
    this.Products();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.lastProducts();
      event.target.complete();
    }, 2000);
  }

  // Productos nuevos
  lastProducts() {
    this.httpService.get('producto/lastproductos').subscribe(
      (res: any) => {
        if (res) {
          this.productosRecientes = res.items;
        } else {
          this.toastService.presentToast(res.message, 'danger');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  // Productos nuevos
  Products() {
    this.httpService.get('producto/productosindex').subscribe(
      (res: any) => {
        if (res) {
          this.productos = res.items;
        } else {
          this.toastService.presentToast(res.message, 'danger');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  // Mostrar modal de busqueda
  async showSingleSelectModal() {
    const modal = await this.modalCtrl.create({
      component: ModalBuscarPage
    });
    modal.onDidDismiss()
      .then((data) => {
        // this.form.primaria = data.data.codigo;
        // this.ciiuPrimaria = data.data.nombre;
      });
    await modal.present();
  }

}
