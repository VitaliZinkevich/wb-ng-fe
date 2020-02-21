import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailesPageRoutingModule } from './detailes-routing.module';

import { DetailesPage } from './detailes.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailesPageRoutingModule,
    ],
    declarations: [DetailesPage],
})
export class DetailesPageModule {}
