import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../services/toast.service';
import {HttpService} from '../../../services/http.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  titulo: string;
  clases: any;
  curso: any;
  id: string;

  // tslint:disable-next-line: max-line-length
  constructor(private toastService: ToastService, private httpService: HttpService, private iab: InAppBrowser, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = 'Detalle del curso';
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.httpService.get('curso/clasescurso/' + this.id).subscribe(
        (res: any) => {
          if (res.curso) {
            this.curso = res.curso;
            this.clases = res.clases_curso;
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

  openUrl(url: any) {
    const browser = this.iab.create(url, '_system');
  }
}
