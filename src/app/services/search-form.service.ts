import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SearchFormService {
    private searchForm = {
        dateStartFrom: '',
        dateStartTo: '',
        nights: ['1'],
        stars: 'any',
        location: '',
        searchString: '',
    };

    private hotels: any[];

    constructor() {}

    public getSearchForm() {
        const emptyFormCopy = JSON.parse(JSON.stringify(this.searchForm));
        return emptyFormCopy;
    }
}
