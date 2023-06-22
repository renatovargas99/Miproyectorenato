import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddclientesPage } from './addclientes.page';

const routes: Routes = [
  {
    path: '',
    component: AddclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddclientesPageRoutingModule {}
