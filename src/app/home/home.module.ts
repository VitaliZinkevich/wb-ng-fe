import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HotelListComponent } from './../hotel-list/hotel-list.component';
import { HotelsService } from './../services/hotels.service';
import { SearchFormService } from './../services/search-form.service';
import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
    providers: [SearchFormService, HotelsService],
})
export class HomePageModule {}
