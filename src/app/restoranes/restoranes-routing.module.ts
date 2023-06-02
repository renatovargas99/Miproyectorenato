import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestoranesPage } from './restoranes.page';

const routes: Routes = [
  {
    path: '',
    component: RestoranesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestoranesPageRoutingModule {}
