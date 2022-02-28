import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { HttpService } from 'src/app/services/http.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-buscar',
  templateUrl: './modal-buscar.page.html',
  styleUrls: ['./modal-buscar.page.scss'],
})
export class ModalBuscarPage implements OnInit {
  isItemAvailable = false;
  items = [];
  busqueda: string;

  constructor(
      public modalCtrl: ModalController,
      public httpService: HttpService,
      private toastService: ToastService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.requestData(val);
    } else {
      this.items = [];
    }
  }

  navigateTo(productoId: number, tipoProductoId: number) {
    this.router.navigateByUrl('/detalle-producto/' + productoId + '?n=' + tipoProductoId);
    this.modalCtrl.dismiss();
  }

  requestData(val: string) {
    const body = new HttpParams()
          .set('filtro', val);

    this.httpService.post('producto/productofind', body.toString()).subscribe(
        (res: any) => {
          if (res) {
            this.items = res.items;
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));
        }
    );
  }

  selectedProduct(){}
  
}
