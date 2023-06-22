import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailclientesPage } from './detailclientes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailclientesPageRoutingModule {}
