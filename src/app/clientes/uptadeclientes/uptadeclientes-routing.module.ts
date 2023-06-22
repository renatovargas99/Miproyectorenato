import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UptadeclientesPage } from './uptadeclientes.page';

const routes: Routes = [
  {
    path: '',
    component: UptadeclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UptadeclientesPageRoutingModule {}
