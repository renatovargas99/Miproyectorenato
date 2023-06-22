import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarclientesPageRoutingModule } from './listarclientes-routing.module';

import { ListarclientesPage } from './listarclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarclientesPageRoutingModule
  ],
  declarations: [ListarclientesPage]
})
export class ListarclientesPageModule {}
