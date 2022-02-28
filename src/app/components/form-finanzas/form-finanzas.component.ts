import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  HttpParams
} from '@angular/common/http';
import {
  HttpService
} from 'src/app/services/http.service';
import {
  ToastService
} from 'src/app/services/toast.service';
import {
  AuthService
} from 'src/app/services/auth.service';
import {
  AuthUser
} from '../../interfaces/interfaces';

@Component({
  selector: 'app-form-finanzas',
  templateUrl: './form-finanzas.component.html',
  styleUrls: ['./form-finanzas.component.scss'],
})
export class FormFinanzasComponent implements OnInit {
  authUser: AuthUser;
  @Input() botonText: string;
  @Input() tituloText: string;
  @Input() formId: number;
  @Input() tipo: string;
  @Input() color: string;
  @Input() colorchip: string;

  descripcion: string;
  monto: string;
  items = [];

  public form = new FormGroup({
    descripcion: new FormControl(''),
    monto: new FormControl('')
  });

  validationMessages = {
    descripcion: [{
        type: 'required',
        message: 'Descripción es requerida.'
      },
      {
        type: 'minlength',
        message: 'Descripción debe contener al menos 4 caracteres.'
      },
    ],
    monto: [{
      type: 'required',
      message: 'Monto es requerido.'
    }],
  };

  constructor(public httpService: HttpService, public toastService: ToastService, public authService: AuthService) {}

  async ngOnInit() {
    this.form = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      monto: new FormControl('', Validators.required)
    });
    await this.checkStorage();
    this.listarOperacion();
  }

  // Ingresando nuevas compras, gastos, ventas
  onSubmitTemplate() {
    let tipo;
    if (this.formId === 1) {
      tipo = 'compra';
    } else if ((this.formId === 2)) {
      tipo = 'gasto';
    } else {
      tipo = 'venta';
    }

    const body = new HttpParams()
      .set('persona_id', this.authUser.p_id.toString())
      .set('empresa_id', this.authUser.empresa_id.toString())
      .set('descripcion', this.descripcion)
      .set('monto', this.monto)
      .set('tipo', tipo);

    this.httpService.post('empresafinanza', body.toString()).subscribe(
      (res: any) => {
        if (res) {
          this.listarOperacion();
          this.toastService.presentToast(`Operacion agregada exitosamente!`, 'success');
          this.clearForm();
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No fue posible realizar la operación', 'danger');
      }
    );
  }

  // Obtener datos del usuario
  async checkStorage() {
    this.authUser = await this.authService.userData();
  }

  // Limpiar datos de formulario
  clearForm() {
    this.descripcion = '';
    this.monto = '';
  }

  async listarOperacion() {
    this.items = [];
    let url;
    if (this.formId === 1) {
      url = 'empresafinanza/finanzaspersonacompras/' + this.authUser.p_id;
    } else if ((this.formId === 2)) {
      url = 'empresafinanza/finanzaspersonagastos/' + this.authUser.p_id;
    } else {
      url = 'empresafinanza/finanzaspersonaventas/' + this.authUser.p_id;
    }

    await this.httpService.get(url).subscribe(
      (res: any) => {
        if (res) {
          if (res.items.length === 0) {
            this.toastService.presentToast('No hay registros a la fecha actual', 'yellowdark');
            return;
          } else {
            this.items.push(...res.items);
          }
        }
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible conectarse con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));
      }
    );
  }

  async deleteItem(idEliminar) {
    const url = 'empresafinanza/' + idEliminar;


    await this.httpService.delete(url).subscribe(
      (res: any) => {
        this.toastService.presentToast('La operación fue eliminada correctamente.', 'success');
        this.listarOperacion();
      },
      (error: any) => {
        this.toastService.presentToast('Error: No es posible conectarse con el servidor', 'danger');
        console.log('Error: '+ JSON.stringify(error));

      }
    );
  }


}
