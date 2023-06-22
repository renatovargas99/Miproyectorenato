import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteclientesPage } from './deleteclientes.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteclientesPageRoutingModule {}
