import { Component, OnInit } from '@angular/core';
import { SearchFormService } from './../services/search-form.service';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import * as moment from 'moment';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
    public searchData;
    public hotelsForRender;
    nights;

    constructor(
        private searchFormService: SearchFormService,
        private orderService: OrderService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.searchData = this.searchFormService.getSearchForm().value;
        this.hotelsForRender = this.searchData.filtredHotelsForm;
        this.nights = moment(this.searchData.dateTo).diff(
            moment(this.searchData.dateFrom),
            'days'
        );
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

        this.hotelsForRender.forEach(hotel => {
            hotel.rooms.forEach(room => {
                room.totalPrice =
                    +this.searchData.adults * +this.nights * +room.price.adult;
                // if (this.searchData.children){
                //     room.totalPrice+= +this.searchData.children * this.nights * +room.price.children;
                // }
            });
        });
    }

    public bookThis(hotel, room) {
        let order = {
            hotel,
            room,
            nights: this.nights,
            adults: this.searchData.adults,
            children: this.searchData.children,
            dateFrom: this.searchData.dateFrom,
            dateTo: this.searchData.dateTo,
        };
        this.orderService.savePreOrder(order);
        this.router.navigate(['/order']);
    }
}
