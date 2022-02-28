import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastController, ActionSheetController, ModalController, AlertController, Platform } from '@ionic/angular';
import { CompraProductoPage } from '../compra-producto/compra-producto.page';
import { HttpParams } from '@angular/common/http';
import { AuthUser } from '../../../interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetalleProductoPage implements OnInit {
  authUser: AuthUser;
  constructor(
    public toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    public httpService: HttpService,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    private platform: Platform,
    private authService: AuthService
  ) { }

  id: string;
  tipoproductoid: any;
  tipoproducto: string;
  marca: string;
  nombre: string;
  urlfoto: string;
  descripcion: string;
  precio: string;
  preciopromocion: string;
  nombrepersona: string;
  descripcionCompra: string;
  idpersonaproducto: any;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tipoproductoid = this.platform.getQueryParam('n');
    this.checkStorage();
    this.detalleProducto();
  }

  detalleProducto() {
    this.httpService.get(`producto/${this.id}`).subscribe(
      (res: any) => {
        if (res) {
          this.tipoproducto = res.nombre_tipo_producto;
          this.marca = res.nombre_marca;
          this.nombre = res.nombre;
          this.urlfoto = res.url_foto;
          this.descripcion = res.descripcion;
          this.precio = res.precio;
          this.preciopromocion = res.precio_promocion;
          this.nombrepersona = res.nombre_persona;
          this.idpersonaproducto = res.persona_id;
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

  async addCarrito() {
    const toast = await this.toastController.create({
      message: 'Este producto se agrego a su carrito de compras.',
      duration: 2000
    });
    toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Formas de pago',
      buttons: [
        {
          text: 'Efectivo',
          icon: 'cash',
          handler: () => {
            this.presentAlertConfirm();
          }
        },
        {
          text: 'Tarjeta de credito',
          icon: 'card',
          handler: () => {
            this.pagarTarjeta();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  async pagarTarjeta() {
    const modal = await this.modalCtrl.create({
      component: CompraProductoPage
    });
    await modal.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmación de compra',
      message: '<strong>¿Esta seguro que desea comprar este producto?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar compra');
          }
        }, {
          text: 'Comprar',
          handler: () => {
            console.log('Comprar producto');
            this.comprarEfectivo();
          }
        }
      ]
    });
    await alert.present();
  }

  comprarEfectivo() {
    let preciopost;
    this.descripcionCompra = 'VENTA DEL PRODUCTO ' + this.nombre.toUpperCase();
    if (parseFloat(this.preciopromocion) > 0) {
      preciopost = this.preciopromocion;
    } else {
      preciopost = this.precio;
    }

    const body = new HttpParams()
      .set('persona_id', this.authUser.p_id.toString())
      .set('descripcion', this.descripcionCompra)
      .set('monto', preciopost)
      .set('tipo', 'venta');
    this.httpService.post('empresafinanza', body.toString()).subscribe(
      (res: any) => {
        if (res) {
          // console.log(res);
          this.toastService.presentToast('Venta realizada exitosamente!', 'success');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No fue posible realizar la operación', 'danger');
      }
    );
  }

  async checkStorage() {
    this.authUser = await this.authService.userData();
  }

}
