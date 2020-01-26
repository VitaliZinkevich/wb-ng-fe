import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelsService } from './../services/hotels.service';
import { SearchFormService } from './../services/search-form.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('searchForm', { static: true }) public searchForm: NgForm;
    public hotels: any;
    public filtredHotels;
    constructor(
        private searchFormService: SearchFormService,
        private hotelsService: HotelsService
    ) {
        this.searchForm = this.searchFormService.getCleanSearchForm();
    }

    public ngOnInit() {
        this.hotelsService.getReadyHotels().subscribe(data => {
            this.hotels = data;
            this.filtredHotels = data;
        });

        // .subscribe(data => {
        //     console.log(data);
        //     this.hotels = data;
        //     this.filtredHotels = data;
        // });

        this.searchForm.form.valueChanges.subscribe(form => {
            this.filtredHotels = this.hotels
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
                                  form.location.indexOf(hotel.location + '') >
                                  -1
                              ) {
                                  return true;
                              } else {
                                  return false;
                              }
                          }
                      }
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
                  })
                : [];
        });
    }
    private logForm(todo) {
        console.log(todo);
    }
}
