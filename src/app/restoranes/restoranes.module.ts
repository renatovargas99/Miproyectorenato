import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoranesPageRoutingModule } from './restoranes-routing.module';

import { RestoranesPage } from './restoranes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestoranesPageRoutingModule
  ],
  declarations: [RestoranesPage]
})
export class RestoranesPageModule {}
