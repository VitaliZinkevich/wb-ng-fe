import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SearchFormService {
    private searchForm = {
        dateStartFrom: '',
        dateStartTo: '',
        adults: 1,
        children: 0,
        nights: [],
        stars: [],
        location: [],
        searchString: '',
        selectedHotels: [],
    };

    private hotels: any[];

    constructor() {}

    public getCleanSearchForm() {
        const emptyFormCopy = JSON.parse(JSON.stringify(this.searchForm));
        return emptyFormCopy;
    }

    public getSearchForm() {
        return this.searchForm;
    }
}
