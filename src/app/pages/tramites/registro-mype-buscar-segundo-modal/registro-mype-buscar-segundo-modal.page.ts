import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RegmypeService} from '../../../services/regmype.service';
import {ToastService} from '../../../services/toast.service';
import {CIIU} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-registro-mype-buscar-segundo-modal',
  templateUrl: './registro-mype-buscar-segundo-modal.page.html',
  styleUrls: ['./registro-mype-buscar-segundo-modal.page.scss'],
})
export class RegistroMypeBuscarSegundoModalPage implements OnInit {

  isItemAvailable = false;
  items: any[] = [];
  selected: string;
  aux: any[] = [];
  i = 0;

  constructor(
      public modalCtrl: ModalController,
      private regmypeService: RegmypeService,
      private toastService: ToastService,
  ) { }

  ngOnInit() {
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.requestData(val);
    } else {
      this.items = [];
    }
  }

  save() {
    this.selected = this.aux.join(',');
    this.modalCtrl.dismiss(this.selected);
  }

  requestData(val: string) {
    this.regmypeService.postCIIU(val).subscribe(
        (res: any) => {
          if (res) {
            res.forEach((item, index) => {
              this.items[index] = {
                val: item.nombre,
                codigo: item.codigo,
                isChecked: false
              };
            });
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));
        }
    );
  }

  select(item: any) {
    this.aux[this.i] = item.codigo;
    this.i += 1;
  }
}
