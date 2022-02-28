import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../services/toast.service';
import {HttpService} from '../../../services/http.service';
import {MenuList} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  titulo: string;
  menu: MenuList[] = [];

  constructor(private toastService: ToastService, private httpService: HttpService) { }

  ngOnInit() {
    this.titulo = 'Cursos de Conamype';
    this.getData();
  }

  getData() {
    this.httpService.get('curso/tiposdecurso').subscribe(
        (res: any) => {
          if (res.items) {
            this.menu = res.items;
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

}
