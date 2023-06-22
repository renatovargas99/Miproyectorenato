import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UptadeclientesPageRoutingModule } from './uptadeclientes-routing.module';

import { UptadeclientesPage } from './uptadeclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UptadeclientesPageRoutingModule
  ],
  declarations: [UptadeclientesPage]
})
export class UptadeclientesPageModule {}
