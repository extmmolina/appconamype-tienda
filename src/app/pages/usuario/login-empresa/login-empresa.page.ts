import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.page.html',
  styleUrls: ['./login-empresa.page.scss'],
})
export class LoginEmpresaPage implements OnInit {

  titulo: string;

  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
    this.titulo = 'Ingreso como empresa';
  }

  onSubmitTemplate() {
    console.log('Form submit');
  }

}
