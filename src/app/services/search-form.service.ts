import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { from, Observable, of, BehaviorSubject } from 'rxjs'
@Injectable({
    providedIn: 'root',
})
export class SearchFormService {
    private searchFormMain = new FormGroup({
        dateStartFrom: new FormControl('', [
            Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        dateStartTo: new FormControl('', [
            Validators.required,
            // Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
        ]),
        adults: new FormControl('2', [
            // Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        children: new FormControl('', [
            // Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        nights: new FormControl(
            [],
            [
                // Validators.required,
                // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
            ]
        ),
        stars: new FormControl(
            [],
            [
                // Validators.required,
                // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
            ]
        ),
        location: new FormControl(
            [],
            [
                // Validators.required,
                // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
            ]
        ),
        searchString: new FormControl(
            [],
            [
                // Validators.required,
                // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
            ]
        ),
        selectedHotels: new FormControl(
            [],
            [
                // Validators.required,
                // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
            ]
        ),
    })
    // private searchForm = {
    //     dateStartFrom: '',
    //     dateStartTo: '',
    //     adults: 1,
    //     children: 0,
    //     nights: [],
    //     stars: [],
    //     location: [],
    //     searchString: '',
    //     selectedHotels: [],
    // };
    constructor() {}

    public getSearchForm() {
        return this.searchFormMain
    }
    public getSearchFormV() {
        return this.searchFormMain
    }
}
