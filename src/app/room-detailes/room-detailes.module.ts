import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomDetailesPageRoutingModule } from './room-detailes-routing.module';

import { RoomDetailesPage } from './room-detailes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomDetailesPageRoutingModule
  ],
  declarations: [RoomDetailesPage]
})
export class RoomDetailesPageModule {}
