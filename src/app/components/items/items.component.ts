import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {AuthUser} from '../../interfaces/interfaces';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  authUser: AuthUser;
  @Input() formId: number;
  @Input() color: string;
  items = [];

  // tslint:disable-next-line: max-line-length
  constructor(public authService: AuthService, public httpService: HttpService, public toastService: ToastService) { }
  // tslint:disable-next-line: max-line-length
  async ngOnInit() {
    await this.checkStorage();
    this.listarOperacion();
   }

  async deleteItem(idEliminar) {
    const url = 'empresafinanza/' + idEliminar;


    await this.httpService.delete(url).subscribe(
        (res: any) => {
          this.toastService.presentToast('La operación fue eliminada correctamente.', 'success');
          this.listarOperacion();
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible conectarse con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));

        }
    );
  }

  async listarOperacion() {
    this.items = [];
    let url;
    if (this.formId === 1) {
      url = 'empresafinanza/finanzaspersonacompras/' + this.authUser.p_id;
    } else if ((this.formId === 2)) {
      url = 'empresafinanza/finanzaspersonagastos/' + this.authUser.p_id;
    } else {
      url = 'empresafinanza/finanzaspersonaventas/' + this.authUser.p_id;
    }

    await this.httpService.get(url).subscribe(
        (res: any) => {
          if (res) {
            if (res.items.length === 0) {
              console.log('No hay registros para el dia de hoy');
              this.toastService.presentToast('No hay registros para el dia de hoy', 'danger');
              return;
            } else {
              this.items.push(...res.items);
            }
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible conectarse con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));
        }
    );
  }

  // Obtener datos del usuario
  async checkStorage() {
    this.authUser = await this.authService.userData();
    console.log(this.authUser);
  }

}
