import { Component, OnInit } from '@angular/core';
import { SearchFormService } from './../services/search-form.service';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
    public searchData;
    public hotelsForRender;

    constructor(
        private searchFormService: SearchFormService,
        private orderService: OrderService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.searchData = this.searchFormService.getSearchForm().value;
        this.hotelsForRender = this.searchData.filtredHotelsForm;

        let accomodatioFromForm = `${this.searchData.adults}+${this.searchData.children}`;
        if (this.searchData.selectedHotels.length) {
            this.hotelsForRender = this.hotelsForRender.filter(hotel => {
                if (this.searchData.selectedHotels.indexOf(hotel._id) > -1) {
                    hotel.rooms = hotel.rooms.filter(room => {
                        if (
                            room.accomodation.indexOf(accomodatioFromForm) > -1
                        ) {
                            return true;
                        } else {
                            return false;
                        }
                    });

                    return true;
                } else {
                    return false;
                }
            });
        } else {
            this.hotelsForRender = this.hotelsForRender.filter(hotel => {
                hotel.rooms = hotel.rooms.filter(room => {
                    if (room.accomodation.indexOf(accomodatioFromForm) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                });
                return true;
            });
            this.hotelsForRender = this.hotelsForRender.filter(hotel => {
                if (hotel.rooms.length) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }

    public bookThis(hotel, night, room) {
        let order = {
            night: night,
            adults: 'asd',
            children: 'asdas',
            start: 'asd',
        };
        this.orderService.savePreOrder({ hotel, night, room });
        this.router.navigate(['/order']);
    }
}
