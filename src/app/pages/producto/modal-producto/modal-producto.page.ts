import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Camera,
  CameraOptions,
  PictureSourceType
} from '@ionic-native/camera/ngx';
import { ModalController, ActionSheetController, Platform, LoadingController } from '@ionic/angular';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';
import { AuthUser, Marca, TipoProducto } from '../../../interfaces/interfaces';
import { ToastService } from '../../../services/toast.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';

declare var window: any;
const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.page.html',
  styleUrls: ['./modal-producto.page.scss'],
})
export class ModalProductoPage implements OnInit {

  tempImages: string = null;
  @Input() editedIndex;
  titulo: string;
  authUser: AuthUser;
  form = {
    tipo_producto_id: '',
    nombre: '',
    descripcion: '',
    marca_id: '',
    precio: '',
    precio_promocion: ''
  };
  marca: Marca[] = [];
  tipoproducto: TipoProducto[] = [];
  images: any;
  ref: any;
  imagen: { name: any; path: any; filePath: any; };
  formData: FormData;

  constructor(
    private camera: Camera,
    public modalCtrl: ModalController,
    private authService: AuthService,
    private toastService: ToastService,
    private httpService: HttpService,
    private actionSheetController: ActionSheetController,
    private filePath: FilePath,
    private platform: Platform,
    private file: File,
    private storage: Storage,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    if (this.editedIndex === undefined) {
      this.titulo = 'Agregar producto';
    } else {
      this.titulo = 'Editar producto';
      this.getProducto(this.editedIndex);
    }

    this.formData = new FormData();
    this.checkStorage();
    this.getMarca();
    this.getTipoProducto();
    this.platform.ready().then(() => {
      this.loadStoredImages();
    });
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        this.images = [];
        for (const img of arr) {
          const filePath = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath });
        }
      }
    });
  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType
    };

    this.camera.getPicture(options).then((imagePath) => {
      const resPath = window.Ionic.WebView.convertFileSrc(imagePath);

      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            const currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }

      this.tempImages = resPath;
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

  createFileName() {
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpeg';
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.toastService.presentToast('Error while storing file.', 'danger');
    });
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      if (!arr) {
        const newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      const filePath = this.file.dataDirectory + name;
      const resPath = this.pathForImage(filePath);
      this.imagen = {
        name,
        path: resPath,
        filePath
      };

      this.images = this.imagen;
      // this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = window.Ionic.WebView.convertFileSrc(img);
      return converted;
    }
  }

  startUpload() {
    if (this.imagen) {
      this.file.resolveLocalFilesystemUrl(this.imagen.filePath)
        .then((entry: FileEntry) => {
          entry.file(file => this.readFile(file));
        })
        .catch(err => {
          this.toastService.presentToast('Error while reading file.', 'danger');
        });

    } else {
      if (this.editedIndex !== undefined) {
        this.uploadImageData();
      } else {
        this.toastService.presentToast('Error: Agregue una imagen', 'danger');
      }
    }
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      this.formData.append('url_foto', imgBlob, file.name);
      this.uploadImageData();
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData() {
    const loading = await this.loadingController.create({
      message: 'Guardando producto...',
    });
    await loading.present();

    this.formData.append('persona_id', this.authUser.p_id);
    this.formData.append('nombre', this.form.nombre);
    this.formData.append('descripcion', this.form.descripcion);
    this.formData.append('precio', this.form.precio);
    this.formData.append('precio_promocion', this.form.precio_promocion);
    this.formData.append('marca_id', this.form.marca_id);
    this.formData.append('tipo_producto_id', this.form.tipo_producto_id);

    let url = 'producto';
    if (this.editedIndex !== undefined) {
      url = 'producto/modificarproducto';
      this.formData.append('producto_id', this.editedIndex);
    }

    this.httpService.postProducto(url, this.formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(
        (res: any) => {
          this.toastService.presentToast('Producto guardado', 'success');
          this.modalCtrl.dismiss();
        },
        (error: any) => {
          console.log(error);
          this.toastService.presentToast(error.message, 'danger');
        }
      );
  }

  getMarca() {
    this.httpService.get('marca').subscribe(
      (res: any) => {
        if (res.items) {
          this.marca = res.items;
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  getTipoProducto() {
    this.httpService.get('tipoproducto').subscribe(
      (res: any) => {
        if (res.items) {
          this.tipoproducto = res.items;
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  getProducto(id: string) {
    this.httpService.get('producto/' + id).subscribe(
      (res: any) => {
        if (res) {
          this.form.tipo_producto_id = res.tipo_producto_id;
          this.form.nombre = res.nombre;
          this.form.descripcion = res.descripcion;
          this.form.marca_id = res.marca_id;
          this.form.precio = res.precio;
          this.tempImages = res.url_foto;
          this.form.precio_promocion = res.precio_promocion;
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  async checkStorage() {
    this.authUser = await this.authService.userData();
  }

  selectFormLibrary() {
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione un recurso',
      buttons: [{
        text: 'Libreria',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar camara',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
