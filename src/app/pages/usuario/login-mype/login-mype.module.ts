import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMypePageRoutingModule } from './login-mype-routing.module';

import { LoginMypePage } from './login-mype.page';
import { ComponentsModule } from '../../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LoginMypePageRoutingModule
  ],
  declarations: [LoginMypePage]
})
export class LoginMypePageModule {}
