import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HotelsService } from './../services/hotels.service';
import { ListPage } from './list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ListPage,
            },
        ]),
    ],
    declarations: [ListPage],
    providers: [HotelsService],
})
export class ListPageModule {}
