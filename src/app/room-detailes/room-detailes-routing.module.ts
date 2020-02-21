import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomDetailesPage } from './room-detailes.page';

const routes: Routes = [
  {
    path: '',
    component: RoomDetailesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomDetailesPageRoutingModule {}
