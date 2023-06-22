import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailclientesPageRoutingModule } from './detailclientes-routing.module';

import { DetailclientesPage } from './detailclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailclientesPageRoutingModule
  ],
  declarations: [DetailclientesPage]
})
export class DetailclientesPageModule {}
