import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HotelListComponent } from './../hotel-list/hotel-list.component';

import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        BsDatepickerModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: HomePage,
            },
        ]),
    ],
    declarations: [HomePage, HotelListComponent],
    providers: [],
})
export class HomePageModule {}
