import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  HttpService
} from 'src/app/services/http.service';
import {
  ToastService
} from 'src/app/services/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.scss'],
})
export class CatalogoProductosComponent implements OnInit {
  @Input() idTipo;
  pageProduct = 0;
  Productos: any[] = [];
  url: string;

  slideOptsProducts = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private router: Router, private httpService: HttpService, private toastService: ToastService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  loadData(event) {
    this.cargarProductos(event);
  }

  navigateTo(productoId: number, tipoProductoId: number) {
    this.router.navigateByUrl('/detalle-producto/' + productoId + '?n=' + tipoProductoId);
  }

  cargarProductos(event?) {
    if (this.idTipo) {
      this.url = `producto/productosrelacionados?tipoproducto=${this.idTipo}`;
    } else {
      this.pageProduct++;
      this.url = `producto/productosindex?page=${this.pageProduct}`;
    }
    this.httpService.get(this.url).subscribe(
      (res: any) => {
        if (res) {
          if (res.items.length === 0) {
            // event.target.disable = true;
            console.log('no hay mas registros');
            return;
          } else {
            this.Productos.push(...res.items);
          }
          if (event) {
            event.target.complete();
          }
        } else {
          console.log('sin resp');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

}

