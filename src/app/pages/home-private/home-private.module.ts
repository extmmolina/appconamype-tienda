import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePrivatePageRoutingModule } from './home-private-routing.module';

import { HomePrivatePage } from './home-private.page';
import {ComponentsModule} from '../../components/components.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePrivatePageRoutingModule,
        ComponentsModule
    ],
  declarations: [HomePrivatePage]
})
export class HomePrivatePageModule {}
