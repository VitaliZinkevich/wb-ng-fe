import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from './../services/hotels.service';
import { SearchFormService } from './../services/search-form.service';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { CommonsService } from './../services/commons.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    signedIn;
    user;
    public hotels: any = [];
    public filtredHotels: any = [];
    public searchForm;
    public api$;
    public searchFormValues$;
    authStateChange$;
    constructor(
        private searchFormService: SearchFormService,
        private hotelsService: HotelsService,
        private router: Router,
        private amplifyService: AmplifyService,
        private commonsService: CommonsService
    ) {
        this.authStateChange$ = this.amplifyService.authStateChange$.subscribe(
            authState => {
                console.log('authStateChange$ HOME', authState);
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    this.user = authState.user;
                }
            }
        );
        // console.log(this.signedIn, this.user);
    }
    public ngOnDestroy() {
        this.api$.unsubscribe();
        this.searchFormValues$.unsubscribe();
        this.authStateChange$.unsubscribe();
    }

    public async ngOnInit() {
        this.searchForm = this.searchFormService.getSearchForm();
        let loader = await this.commonsService.getLoader('');
        loader.present();
        this.api$ = this.hotelsService.api.subscribe((data: { url: any }) => {
            loader.dismiss();
            this.hotels = data.url;
            this.filtredHotels = this.filterHotelList(
                this.hotels,
                this.searchForm.value
            );
        });

        this.searchFormValues$ = this.searchForm.valueChanges.subscribe(
            form => {
                this.filtredHotels = this.filterHotelList(this.hotels, form);
            }
        );
    }

    public filterHotelList(list, form) {
        list = list.filter(hotel => {
            if (form.stars && form.stars.length) {
                if (form.stars.indexOf(hotel.stars + '') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        });
        list = list.filter(hotel => {
            if (form.location) {
                if (form.location && form.location.length) {
                    if (form.location.indexOf(hotel.location + '') > -1) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            return true;
        });
        list = list.filter(hotel => {
            if (form.searchString) {
                if (
                    hotel.name
                        .toUpperCase()
                        .indexOf(form.searchString.toUpperCase()) > -1
                ) {
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        });
        return list;
    }

    public priceShow() {
        this.searchForm.value.filtredHotelsForm = this.filtredHotels;
        this.router.navigate(['/list']);
    }

    logOut() {
        Auth.signOut().catch(err => console.log(err));
    }
}
