import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { HttpService } from '../../../services/http.service';
import { ModalController } from '@ionic/angular';
import { FeriasCongresosModalPage } from '../ferias-congresos-modal/ferias-congresos-modal.page';

@Component({
  selector: 'app-ferias-congresos',
  templateUrl: './ferias-congresos.page.html',
  styleUrls: ['./ferias-congresos.page.scss'],
})
export class FeriasCongresosPage implements OnInit {
  titulo: string;
  congresos = [];

  constructor(private toastService: ToastService, private httpService: HttpService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.titulo = 'Ferias y Congresos';
    this.getData();
  }

  getData() {
    this.httpService.get('evento').subscribe(
      (res: any) => {
        if (res.items) {
          this.congresos = res.items;
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

  async showModal(feria: any) {
    const modal = await this.modalCtrl.create({
      component: FeriasCongresosModalPage,
        componentProps: {
            feria
        }
    });
    await modal.present();
  }
}
