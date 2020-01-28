import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from './../services/hotels.service';
import { SearchFormService } from './../services/search-form.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    public hotels: any = [];
    public filtredHotels;
    public searchForm;
    sub1;
    sub2;
    constructor(
        private searchFormService: SearchFormService,
        private hotelsService: HotelsService,
        private router: Router
    ) {}
    public ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    }

    public ngOnInit() {
        this.searchForm = this.searchFormService.getSearchForm();
        this.sub1 = this.hotelsService.api.subscribe(data => {
            this.hotels = data;
            this.filtredHotels = data;
        });

        this.sub2 = this.searchForm.valueChanges.subscribe(form => {
            this.filtredHotels =
                this.hotels.length > 0
                    ? this.hotels.filter(hotel => {
                          if (form.stars && form.stars.length) {
                              if (form.stars.indexOf(hotel.stars + '') > -1) {
                                  return true;
                              } else {
                                  return false;
                              }
                          }
                          if (form.location) {
                              if (form.location && form.location.length) {
                                  if (
                                      form.location.indexOf(
                                          hotel.location + ''
                                      ) > -1
                                  ) {
                                      return true;
                                  } else {
                                      return false;
                                  }
                              }
                          }
                          console.log(form.searchString);
                          if (form.searchString) {
                              if (
                                  hotel.name
                                      .toUpperCase()
                                      .indexOf(
                                          form.searchString.toUpperCase()
                                      ) > -1
                              ) {
                                  return true;
                              } else {
                                  return false;
                              }
                          }
                          return true;
                      })
                    : this.hotels;
        });
    }
    public priceShow() {
        this.searchForm.value.filtredHotelsForm = this.filtredHotels;
        this.router.navigate(['/list']);
    }
}
