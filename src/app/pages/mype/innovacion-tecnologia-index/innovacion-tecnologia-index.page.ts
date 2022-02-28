import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../services/toast.service';
import {HttpService} from '../../../services/http.service';
import {Blog} from '../../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-innovacion-tecnologia-index',
  templateUrl: './innovacion-tecnologia-index.page.html',
  styleUrls: ['./innovacion-tecnologia-index.page.scss'],
})
export class InnovacionTecnologiaIndexPage implements OnInit {

  titulo: string;
  blogs: Blog[] = [];

  constructor(private toastService: ToastService, private httpService: HttpService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.titulo = 'Innovación y Tecnología';
    this.getData();
  }

  getData() {
    this.httpService.get('innovacion').subscribe(
        (res: any) => {
          if (res) {
            this.blogs = res.items;
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

    abrirNoticia(urlNoticia: string) {
        const browser = this.iab.create(urlNoticia, '_system');
    }
}
