import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { HttpService } from '../../../services/http.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  titulo: string;
  calendario: string;
  documento: string;
  items = [];

  constructor(private toastService: ToastService, private httpService: HttpService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.titulo = 'Calendario Tributario';
    this.getCalendario();
    this.getEventos();
    this.getDocumento();
  }

  getCalendario() {
    this.httpService.get('mestributario/imgmestributario').subscribe(
      (res: any) => {
        if (res.imagen) {
          this.calendario = res.imagen;
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

  getDocumento() {
    this.httpService.get('archivo/doctributacion').subscribe(
      (res: any) => {
        if (res.url_documento) {
          this.documento = res.url_documento;
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

  getEventos() {
    this.httpService.get('mestributario/eventostributarios').subscribe(
      (res: any) => {
        if (res.length > 0) {
          this.items = res;
        } else {
          this.toastService.presentToast('No hay eventos registrados', 'danger');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  abrirDoc(urlDoc: string) {
    const browser = this.iab.create(urlDoc, '_system');
  }

}
