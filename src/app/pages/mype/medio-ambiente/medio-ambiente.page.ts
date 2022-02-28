import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medio-ambiente',
  templateUrl: './medio-ambiente.page.html',
  styleUrls: ['./medio-ambiente.page.scss'],
})
export class MedioAmbientePage implements OnInit {

  public items: any = [];
  // Data de la base de datos
  medioambiente: any[] = [
    {
      tipo_medioambiente: 'Hallazgo',
      descripcion: 'En este apartado se colocara el hallazgo encontrado producto del diagnostico ambiental.'
    }
  ];

  constructor() {
    this.items = [
      {
        expanded: true,
        nombre: 'HALLAZGO',
        color: 'reddark'
      },
      {
        expanded: false,
        nombre: 'JUSTIFICACIÓN',
        color: 'greendark'
      },
      {
        expanded: false,
        nombre: 'PLAN DE ACCION ',
        color: 'yellowdark'
      },
      {
        expanded: false,
        nombre: 'RESPONSABLE',
        color: 'tealdark'
      },
      {
        expanded: false,
        nombre: 'FECHAS DE REALIZACION',
        color: 'purpledark'
      },
      {
        expanded: false,
        nombre: 'LUGAR',
        color: 'pinkdark'
      }
    ];
  }

  ngOnInit() {
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
}
}
