import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-mype',
  templateUrl: './login-mype.page.html',
  styleUrls: ['./login-mype.page.scss'],
})
export class LoginMypePage implements OnInit {

  titulo: string;
  usuario = {
    name: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
    this.titulo = 'Ingreso CONAMYPE';
  }

  onSubmitTemplate() {
    console.log('Form submit');
  }

}
