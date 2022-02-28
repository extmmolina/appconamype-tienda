import { Component, OnInit } from '@angular/core';
import {AuthConstants} from '../../../config/auth-constants';
import {AuthService} from '../../../services/auth.service';
import {ToastService} from '../../../services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  titulo: string;
  form = {
    nombre: '',
    apellido: '',
    nit: '',
    dui: '',
    direccion: '',
    telefono: '',
    correo: '',
    clave: '',
    empresa: '',
    condicion_juridica:''
  };

  showNIT: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private toastService: ToastService) { }

  ngOnInit() {
    this.titulo = 'Datos Personales';
    this.showNIT = false;
  }

  showNit(event){
    console.log(event.target.value);
    if (event.target.value === "PERSONA JURIDICA") {
      this.sleep(500).then(async () => {
        this.showNIT = true; //mostrar la seccion del nit
      });
    }else{
      this.showNIT = false; //ocultar la seccion del nit
    }
  }

  sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time)); 
  }

  onSubmitTemplate() {
    this.authService.signUp(this.form).subscribe(
        (res: any) => {
          if (res) {
            this.toastService.presentToast('Registrado satisfactoriamente', 'success');
            this.router.navigate(['login']);
          } else {
            this.toastService.presentToast(res.message, 'danger');
          }
        },
        (error: any) => {
          this.toastService.presentToast(error, 'danger');
        }
    );
  }

}
