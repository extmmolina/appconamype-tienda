import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HttpParams } from '@angular/common/http';
import { ToastService } from 'src/app/services/toast.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from '../../../../interfaces/interfaces';


@Component({
  selector: 'app-inscripcion-modal',
  templateUrl: './inscripcion-modal.page.html',
  styleUrls: ['./inscripcion-modal.page.scss'],
})
export class InscripcionModalPage implements OnInit {

  constructor(
    public httpService: HttpService,
    public toastService: ToastService,
    public modalCtrl: ModalController,
    private authService: AuthService,

  ) { }
  @Input() idEvento;
  formValid = {
    nombre: '',
    direccion: '',
    telefono: '',
    email: ''
  };
  authUser: AuthUser;

  ngOnInit() {
    this.checkStorage();
  }

  onSubmitValid() {
    const body = new HttpParams()
      .set('nombre', this.formValid.nombre)
      .set('direccion', this.formValid.direccion)
      .set('telefono', this.formValid.telefono)
      .set('evento_id', this.idEvento)
      .set('persona_id', this.authUser.p_id.toString())
      .set('email', this.formValid.email);

    this.httpService.post('participacion', body.toString()).subscribe(
      (res: any) => {
        if (res) {
          this.cerrarModal();
          this.toastService.presentToast('Empresa registrada...', 'success');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No fue posible realizar la operación', 'danger');
      }
    );
  }

  cerrarModal() {
    // this.toastService.presentToast('Empresa registrada...', 'success');
    this.modalCtrl.dismiss();
  }

  async checkStorage() {
    this.authUser = await this.authService.userData();
  }

}
