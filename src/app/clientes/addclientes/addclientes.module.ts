import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddclientesPageRoutingModule } from './addclientes-routing.module';

import { AddclientesPage } from './addclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddclientesPageRoutingModule
  ],
  declarations: [AddclientesPage]
})
export class AddclientesPageModule {}
