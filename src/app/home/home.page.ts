import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelsService } from './../services/hotels.service';
import { SearchFormService } from './../services/search-form.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    // @ViewChild('searchForm', { static: true }) public searchForm1: NgForm;
    public hotels: any;
    public filtredHotels;
    public form;
    public searchForm;
    constructor(
        private searchFormService: SearchFormService,
        private hotelsService: HotelsService,
        private router: Router
    ) {
        this.searchForm = this.searchFormService.getSearchForm();
        // this.searchForm = this.searchFormService.getCleanSearchForm();
    }
    public ngOnDestroy() {
        this.searchFormService.saveForm(this.searchForm.value);
    }

    public ngOnInit() {
        this.hotelsService.getReadyHotels().subscribe(data => {
            this.hotels = data;
            this.filtredHotels = data;
        });

        this.searchForm.valueChanges.subscribe(form => {
            console.log(form);
            //     console.log(this.searchForm);
            // this.filtredHotels = this.hotels
            //     ? this.hotels.filter(hotel => {
            //           if (form.stars && form.stars.length) {
            //               if (form.stars.indexOf(hotel.stars + '') > -1) {
            //                   return true;
            //               } else {
            //                   return false;
            //               }
            //           }
            //           if (form.location) {
            //               if (form.location && form.location.length) {
            //                   if (
            //                       form.location.indexOf(hotel.location + '') >
            //                       -1
            //                   ) {
            //                       return true;
            //                   } else {
            //                       return false;
            //                   }
            //               }
            //           }
            //           if (form.searchString) {
            //               if (
            //                   hotel.name
            //                       .toUpperCase()
            //                       .indexOf(form.searchString.toUpperCase()) > -1
            //               ) {
            //                   return true;
            //               } else {
            //                   return false;
            //               }
            //           }
            //           return true;
            //       })
            //     : [];
        });
    }
    public priceShow() {
        this.searchFormService.saveForm(this.searchForm.value);
        this.router.navigate(['/list']);

        // console.log('sad');
    }
}
