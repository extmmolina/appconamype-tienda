import { GridMenu } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-gridcatalogo',
  templateUrl: './gridcatalogo.component.html',
  styleUrls: ['./gridcatalogo.component.scss'],
})


export class GridcatalogoComponent implements OnInit {

  @Input() menu: GridMenu[] = [];
  slideOpts = {
    slidesPerView: 2.2,
    freeMode: true,
    spaceBetween: 0
  };

  slideOptsProducts = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween: 0
  };

  constructor() { }

  ngOnInit() {}

  verDetalle() {}

  verMas() {}

}
