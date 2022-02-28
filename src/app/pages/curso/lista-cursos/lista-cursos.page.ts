import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../services/toast.service';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.page.html',
  styleUrls: ['./lista-cursos.page.scss'],
})
export class ListaCursosPage implements OnInit {

  titulo: string;
  nombreCurso: string;
  id: string;
  cursos = [];

  constructor(private toastService: ToastService, private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = 'Cursos Disponibles';
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.httpService.get('curso/cursostipocurso/' + this.id).subscribe(
        (res: any) => {
          if (res.items.length > 0) {
            this.cursos = res.items;
            this.nombreCurso = res.items[0].nombre_tipo_curso;
          } else {
            this.toastService.presentToast('Sin cursos disponibles', 'danger');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));
        }
    );
  }

}
