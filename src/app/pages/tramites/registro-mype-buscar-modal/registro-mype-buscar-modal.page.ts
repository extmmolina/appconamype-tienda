import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RegmypeService} from '../../../services/regmype.service';
import {ToastService} from '../../../services/toast.service';
import {CIIU} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-registro-mype-buscar-modal',
  templateUrl: './registro-mype-buscar-modal.page.html',
  styleUrls: ['./registro-mype-buscar-modal.page.scss'],
})
export class RegistroMypeBuscarModalPage implements OnInit {

  isItemAvailable = false;
  items: CIIU[] = [];

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

  selectedCIIU(item: CIIU): void {
    this.modalCtrl.dismiss(item);
  }

  requestData(val: string) {
    // console.log("producto: "+val);
    this.regmypeService.postCIIU(val).subscribe(
        (res: any) => {
          if (res) {
            this.items = res;
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));
        }
    );
  }

}
