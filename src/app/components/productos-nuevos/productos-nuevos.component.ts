import { NuevosProductos } from './../../interfaces/interfaces'; // importando la interfaz que se utilizara
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-productos-nuevos',
  templateUrl: './productos-nuevos.component.html',
  styleUrls: ['./productos-nuevos.component.scss'],
})
export class ProductosNuevosComponent implements OnInit {

  @Input() nuevosProductos: NuevosProductos[] = []; // Interfaz de nuevos productos
  slideOpts = {
    slidesPerView: 2.2,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateTo(productoId: number, tipoProductoId: number) {
    this.router.navigateByUrl('/detalle-producto/' + productoId + '?n=' + tipoProductoId);
  }

}
