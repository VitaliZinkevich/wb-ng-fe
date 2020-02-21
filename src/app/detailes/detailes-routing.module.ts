import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailesPage } from './detailes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailesPageRoutingModule {}
