import {Component, OnInit, Input} from '@angular/core';
import {ActionSheetController, ToastController, LoadingController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {ModalProductoPage} from '../modal-producto/modal-producto.page';
import {AuthUser, Producto} from '../../../interfaces/interfaces';
import {HttpService} from '../../../services/http.service';
import {ToastService} from '../../../services/toast.service';
import {AuthService} from '../../../services/auth.service';
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.page.html',
    styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

    productos: Producto[] = [];
    authUser: AuthUser;
    documento: string;
    flag = false;
    loading: boolean;

    constructor(
        public actionSheetCtrl: ActionSheetController,
        public modalCtrl: ModalController,
        public toastController: ToastController,
        private toastService: ToastService,
        private authService: AuthService,
        private socialSharing: SocialSharing,
        private httpService: HttpService,
        private router: Router,
        private loadingController: LoadingController,
        private iab: InAppBrowser
    ) {
    }

    async ngOnInit() {
        await this.checkStorage();
        this.getProductos();
        this.getDocumento();
    }

    async share() {
        await this.socialSharing.share('Mis productos', null, '', this.documento);
    }

    openUrl() {
        const browser = this.iab.create(this.documento, '_system');
    }

    getDocumento() {
        this.documento = 'http://192.168.18.20:8080/app-ecommerce/api/web/catproductos/' + this.authUser.p_id;
        /* this.httpService.getCatalogo(this.authUser.p_id).subscribe(
          (res: any) => {
            console.log(res.url_documento);
            if (res.url_documento) {
              this.documento = res.url_documento;
            } else {
              this.toastService.presentToast(res.message, 'danger');
            }
          },
          (error: any) => {
            this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
            console.log('Error: '+ JSON.stringify(error));
          }
        ); */
    }

    getProductos() {
        this.loading = true;
        this.httpService.get('producto/productospersona/' + this.authUser.p_id)
            .pipe(
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe(
                (res: any) => {
                    if (res.items) {
                        this.productos = res.items;
                    }
                },
                (error: any) => {
                    this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
                    console.log('Error: '+ JSON.stringify(error));
                }
            );
    }

    async deleteProducto(id: number, index: number) {
        const loading = await this.loadingController.create({
            message: 'Eliminando producto...',
        });
        await loading.present();

        this.httpService.delete('producto/' + id)
            .pipe(
                finalize(() => {
                    loading.dismiss();
                })
            )
            .subscribe(
                (res: any) => {
                    this.productos.forEach((item, i) => {
                        if (index === i) {
                            this.productos.splice(i, 1);
                        }
                    });
                    this.toastService.presentToast('Producto eliminado', 'success');
                },
                (error: any) => {
                    this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
                    console.log('Error: '+ JSON.stringify(error));
                }
            );
    }

    async lanzarMenu(idprod, index) {
        const actionSheet = await this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Previsualizar',
                    icon: 'search',
                    cssClass: 'action-dark',
                    handler: () => {
                        this.navigateTo(idprod);
                    }
                },
                {
                    text: 'Editar',
                    icon: 'create',
                    cssClass: 'action-dark',
                    handler: () => {
                        this.showModal(idprod);
                    }
                },
                {
                    text: 'Eliminar',
                    icon: 'trash',
                    cssClass: 'action-dark',
                    handler: () => {
                        this.toastDelete(idprod, index);
                    }
                }
            ]
        });

        await actionSheet.present();
    }

    async showModal(index?) {
        const modal = await this.modalCtrl.create({
            component: ModalProductoPage,
            componentProps: {
                editedIndex: index
            }
        });
        await modal.present();
    }

    async toastDelete(idprod, index: number) {
        const toast = await this.toastController.create({
            header: '¿Esta seguro que desea eliminar?',
            position: 'top',
            color: 'reddark',
            buttons: [
                {
                    text: 'Eliminar',
                    handler: () => {
                        this.deleteProducto(idprod, index);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: () => {
                        console.log('boton Cancelar');
                    }
                }
            ]
        });
        toast.present();
    }

    async checkStorage() {
        this.authUser = await this.authService.userData();
    }

    doRefresh(event) {
        this.getProductos();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }

    navigateTo(productoId: number) {
        this.router.navigateByUrl('/detalle-producto/' + productoId);
    }


}

