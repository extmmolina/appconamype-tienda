import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMypePageRoutingModule } from './registro-mype-routing.module';

import { RegistroMypePage } from './registro-mype.page';
import {ComponentsModule} from '../../../components/components.component';
import {NgxMaskIonicModule} from 'ngx-mask-ionic';
import {RegistroMypeBuscarModalPage} from '../registro-mype-buscar-modal/registro-mype-buscar-modal.page';
import {RegistroMypeBuscarModalPageModule} from '../registro-mype-buscar-modal/registro-mype-buscar-modal.module';
import {RegistroMypeBuscarSegundoModalPage} from '../registro-mype-buscar-segundo-modal/registro-mype-buscar-segundo-modal.page';
import {RegistroMypeBuscarSegundoModalPageModule} from '../registro-mype-buscar-segundo-modal/registro-mype-buscar-segundo-modal.module';

@NgModule({
  entryComponents: [
    RegistroMypeBuscarModalPage,
    RegistroMypeBuscarSegundoModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMypePageRoutingModule,
    ComponentsModule,
    RegistroMypeBuscarModalPageModule,
    RegistroMypeBuscarSegundoModalPageModule,
    NgxMaskIonicModule
  ],
  declarations: [RegistroMypePage]
})
export class RegistroMypePageModule {}
