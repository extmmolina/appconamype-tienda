import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InscripcionModalPage } from '../ferias-congresos/inscripcion-modal/inscripcion-modal.page';
import { AuthUser } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ferias-congresos-modal',
  templateUrl: './ferias-congresos-modal.page.html',
  styleUrls: ['./ferias-congresos-modal.page.scss'],
})
export class FeriasCongresosModalPage implements OnInit {

  feria;
  authUser: AuthUser;

  constructor(private authService: AuthService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.checkStorage();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: InscripcionModalPage,
      componentProps: {
        idEvento: this.feria.evento_id
      }
    });
    return await modal.present();
  }

  async checkStorage() {
    this.authUser = await this.authService.userData();
  }

}
