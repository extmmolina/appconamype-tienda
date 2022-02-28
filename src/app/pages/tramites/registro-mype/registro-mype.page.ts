import { Component, OnInit } from '@angular/core';
import {RegmypeService} from '../../../services/regmype.service';
import {ToastService} from '../../../services/toast.service';
import {Departamento, Municipio, TipoAsociacion} from '../../../interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {RegistroMypeBuscarModalPage} from '../registro-mype-buscar-modal/registro-mype-buscar-modal.page';
import {RegistroMypeBuscarSegundoModalPage} from '../registro-mype-buscar-segundo-modal/registro-mype-buscar-segundo-modal.page';

@Component({
  selector: 'app-registro-mype',
  templateUrl: './registro-mype.page.html',
  styleUrls: ['./registro-mype.page.scss'],
})
export class RegistroMypePage implements OnInit {
  titulo: string;
  valid = false;
  formValid = {
    nit: ''
  };
  form = {
    dui: '',
    dui_operador: null,
    nit: '',
    constitucion_id: '',
    tipo_asociacion_id: '',
    nombre: '',
    razon_social: '',
    iva: '',
    fecha_fundacion: '',
    direccion: '',
    departamento_id: '',
    municipio_id: '',
    zona_id: '',
    canton_id: null,
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    conocido: '',
    nit_persona: '',
    numero_otro_documento: '',
    fecha_nacimiento: '',
    sexo: '',
    email: '',
    telefono: '',
    celular: '',
    ventas: '',
    empleo_hr: '',
    empleo_mr: '',
    empleo_hnr: '',
    empleo_mnr: '',
    aprendices: null,
    primaria: '',
    secundarias: '',
  };
  tipoAsociacion: TipoAsociacion[] = [];
  departamentos: Departamento[] = [];
  municipios: Municipio[] = [];
  ciiuPrimaria: string;
  fechaMin: number;

  constructor(private regmypeService: RegmypeService, private toastService: ToastService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.titulo = 'Formulario registro MyPE';
    this.getTipoAsociacion();
    this.getDeptos();
    this.fechaMin = new Date().getFullYear() - 18;
  }

  onSubmitTemplate() {
      this.regmypeService.postCliente(this.form).subscribe(
          (res: any) => {
              this.toastService.presentToast(res.message, 'success');
              this.valid = false;
              this.clearForm();
          },
          (error: any) => {
              this.toastService.presentToast('Error: El DUI del operador no es valido.', 'danger');
          }
      );
  }

  onSubmitValid() {
    const nit = this.formValid.nit.replace(/-/g, '');
    this.regmypeService.get('revisar/' + nit).subscribe(
            (res: any) => {
              if (res.success === true) {
                this.valid = true;
                this.form.nit_persona = nit;
                this.form.nit = this.formValid.nit;
              } else {
                this.toastService.presentToast(res.message, 'danger');
                this.form.nit_persona = '';
              }
            },
            (error: any) => {
              this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
              console.log('Error: '+ JSON.stringify(error));
            }
        );
  }

  getTipoAsociacion() {
    this.regmypeService.get('tipoasociacion').subscribe(
            (res: any) => {
              if (res) {
                this.tipoAsociacion = res;
              }
            },
            (error: any) => {
              this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
              console.log('Error: '+ JSON.stringify(error));
            }
        );
  }

  getDeptos() {
    this.regmypeService.get('departamento').subscribe(
            (res: any) => {
              if (res) {
                this.departamentos = res;
              }
            },
            (error: any) => {
              this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
              console.log('Error: '+ JSON.stringify(error));
            }
        );
  }

  onChangeDepto() {
    const deptoId = this.form.departamento_id;
    this.regmypeService.get('municipio/' + deptoId).subscribe(
        (res: any) => {
          if (res) {
            this.municipios = res;
          }
        },
        (error: any) => {
          this.toastService.presentToast('Error: No es posible contactar con el servidor', 'danger');
          console.log('Error: '+ JSON.stringify(error));
        }
    );
  }

  fechaFundacion(value: string) {
    this.form.fecha_fundacion = value.slice(0, 10);
  }

  fechaNacimiento(value: string) {
    this.form.fecha_nacimiento = value.slice(0, 10);
  }

  async showSingleSelectModal() {
    const modal = await this.modalCtrl.create({
      component: RegistroMypeBuscarModalPage
    });
    modal.onDidDismiss()
        .then((data) => {
          this.form.primaria = data.data.codigo;
          this.ciiuPrimaria = data.data.nombre;
        });
    await modal.present();
  }

  async showMultipleSelectModal() {
    const modal = await this.modalCtrl.create({
      component: RegistroMypeBuscarSegundoModalPage
    });
    modal.onDidDismiss()
        .then((data) => {
          this.form.secundarias = data.data;
        });
    await modal.present();
  }

  clearForm() {
      this.form.dui = '';
      this.form.dui_operador = null;
      this.form.nit = '';
      this.form.constitucion_id = '';
      this.form.tipo_asociacion_id = '';
      this.form.nombre = '';
      this.form.razon_social = '';
      this.form.iva = '';
      this.form.fecha_fundacion = '';
      this.form.direccion = '';
      this.form.departamento_id = '';
      this.form.municipio_id = '';
      this.form.zona_id = '';
      this.form.canton_id = null;
      this.form.nombre1 = '';
      this.form.nombre2 = '';
      this.form.apellido1 = '';
      this.form.apellido2 = '';
      this.form.conocido = '';
      this.form.nit_persona = '';
      this.form.numero_otro_documento = '';
      this.form.fecha_nacimiento = '';
      this.form.sexo = '';
      this.form.email = '';
      this.form.telefono = '';
      this.form.celular = '';
      this.form.ventas = '';
      this.form.empleo_hr = '';
      this.form.empleo_mr = '';
      this.form.empleo_hnr = '';
      this.form.empleo_mnr = '';
      this.form.aprendices = null;
      this.form.primaria = '';
      this.form.secundarias = '';
      this.ciiuPrimaria = '';
      this.formValid.nit = '';
  }
}
