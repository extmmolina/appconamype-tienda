import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {

  titulo: string;
  form = {
    email: '',
    recuperar: null
  };

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    this.titulo = 'Recuperación de Clave';
  }

  onSubmitTemplate() {
    if (this.form.recuperar) {
      console.log('Form submit');
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe chequear que desea recuperar la clave.',
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }

}
