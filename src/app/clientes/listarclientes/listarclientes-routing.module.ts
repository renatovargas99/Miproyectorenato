import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarclientesPage } from './listarclientes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarclientesPageRoutingModule {}
