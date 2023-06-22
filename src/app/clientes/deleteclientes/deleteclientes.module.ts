import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteclientesPageRoutingModule } from './deleteclientes-routing.module';

import { DeleteclientesPage } from './deleteclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteclientesPageRoutingModule
  ],
  declarations: [DeleteclientesPage]
})
export class DeleteclientesPageModule {}
