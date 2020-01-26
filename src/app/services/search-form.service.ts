import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SearchFormService {
    public savedForm;
    private searchForm = new FormGroup({
        dateStartFrom: new FormControl('', [
            Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        dateStartTo: new FormControl('', [
            Validators.required,
            // Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
        ]),
    });
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

    private hotels: any[];

    constructor() {}

    public getSearchForm() {
        console.log(this.searchForm);
        return this.searchForm;
    }

    public saveForm(values) {
        this.savedForm = values;
    }
    public getSavedForm() {
        return this.savedForm;
    }
}
