import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpParams
} from '@angular/common/http';
import {
  ToastService
} from 'src/app/services/toast.service';
import {
  AuthUser
} from 'src/app/interfaces/interfaces';
import {
  HttpService
} from 'src/app/services/http.service';
import {
  AuthService
} from 'src/app/services/auth.service';

@Component({
  selector: 'app-historico-main',
  templateUrl: './historico-main.page.html',
  styleUrls: ['./historico-main.page.scss'],
})
export class HistoricoMainPage implements OnInit {
  titulo: string;
  authUser: AuthUser;
  // tslint:disable-next-line: variable-name
  fecha_1: string;
  // tslint:disable-next-line: variable-name
  fecha_2: string;
  totalventas = '0.00';
  totalgastos = '0.00';
  totalcompras = '0.00';
  totalestado = '0.00';
  color: string;

  constructor(
    public toastService: ToastService,
    public httpService: HttpService,
    public authService: AuthService) { }

  ngOnInit() {
    this.titulo = 'FINANZAS';
    this.checkStorage();
  }

  fecha1(event) {
    this.fecha_1 = event.substr(0, 10);
  }

  fecha2(event) {
    this.fecha_2 = event.substr(0, 10);
  }


  consultaEstado() {
    if (this.fecha_1 == null || this.fecha_2 == null) {
      this.toastService.presentToast('Seleccione un rango de fechas', 'yellowdark');
    } else {
      const body = new HttpParams()
        .set('peid', this.authUser.p_id.toString())
        .set('fecha_inicio', this.fecha_1)
        .set('fecha_fin', this.fecha_2);

      this.httpService.post('empresafinanza/filtrofinanzaspersona', body.toString()).subscribe(
        (res: any) => {
          if (res) {
            if (res.total_ventas === null) {
              this.totalventas = '0.00';
              this.totalgastos = '0.00';
              this.totalcompras = '0.00';
              this.totalestado = '0.00';
              this.toastService.presentToast('No hay registros para el rango de fechas seleccionadas', 'yellowdark');
            } else {
              console.log(res);
              this.totalventas = res.total_ventas;
              this.totalgastos = res.total_gastos;
              this.totalcompras = res.total_compras;
              const estado = res.total_ventas - res.total_gastos - res.total_compras;
              this.totalestado = estado.toFixed(2).toString();
            }
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No fue posible realizar la operación', 'danger');
        }
      );
    }
  }

  // Obtener datos del usuario
  async checkStorage() {
    this.authUser = await this.authService.userData();
  }
}
